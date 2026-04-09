import { useState, useCallback, useMemo } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls } from '@xyflow/react';
import type { Node, Edge, Connection, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { data } from '@/constants';

const generateElements = (sourceData: typeof data): { nodes: Node[], edges: Edge[] } => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];
    let yPos = 0;

    const addNode = (id: string, label: any, depth: number, parentId: string | null = null, lines: number = 1) => {
        const x = depth * 350;
        const y = yPos;
        nodes.push({
            id,
            position: { x, y },
            data: { label },
            style: { width: 300, fontSize: 14, padding: 10 },
            type: depth === 0 ? 'input' : 'default',
        });
        if (parentId) {
            edges.push({
                id: `${parentId}-${id}`,
                source: parentId,
                target: id,
                type: 'smoothstep',
                animated: true,
            });
        }
        yPos += 60 + (lines * 24);
        return id;
    };

    const rootId = addNode('root', 'Architecture & Data', 0);

    // Tech Stack
    const tsId = addNode('techStack', 'Tech Stack', 1, rootId);
    Object.entries(sourceData.techStack).forEach(([key, val]) => {
        addNode(`ts_${key}`, `${key}: ${val.name}`, 2, tsId);
    });

    // Schema
    const schemaId = addNode('schema', 'Database Schema', 1, rootId);
    sourceData.schema.forEach((model) => {
        const label = (
            <div className="text-left w-full">
                <div className="font-bold mb-2 pb-1 border-b border-gray-400 dark:border-gray-600">Model: {model.collection}</div>
                <ul className="text-sm flex flex-col gap-1">
                    {model.fields.map((field, j) => (
                        <li key={j}><span className="font-medium">{field.name}</span> <span className="text-xs text-gray-500">({field.type})</span></li>
                    ))}
                </ul>
            </div>
        );
        addNode(`sc_${model.collection}`, label, 2, schemaId, model.fields.length + 1.5);
    });

    // APIs
    const apisId = addNode('apis', 'APIs', 1, rootId);
    sourceData.apis.forEach((api, i) => {
        addNode(`api_${i}`, `${api.method} ${api.route}`, 2, apisId);
    });

    // Structure
    const structureId = addNode('structure', 'Structure', 1, rootId);
    Object.entries(sourceData.structure).forEach(([key, val]) => {
        const label = (
            <div className="text-left w-full">
                <div className="font-bold mb-2 pb-1 border-b border-gray-400 dark:border-gray-600 capitalize">{key}</div>
                <ul className="text-sm font-mono flex flex-col gap-1">
                    {val.map((path, i) => (
                        <li key={i}>{path}</li>
                    ))}
                </ul>
            </div>
        );
        addNode(`st_${key}`, label, 2, structureId, val.length + 1.5);
    });

    // Scaling
    const scalingId = addNode('scaling', 'Scaling Strategies', 1, rootId);
    sourceData.scaling.forEach((scale, i) => {
        addNode(`scale_${i}`, scale, 2, scalingId);
    });

    return { nodes, edges };
};

export default function MindMap() {
    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => generateElements(data), []);
    
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div className='w-full h-full'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}