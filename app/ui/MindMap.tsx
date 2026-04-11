import { useState, useCallback, useMemo } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls } from '@xyflow/react';
import type { Node, Edge, Connection, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { data as fallbackData } from '@/constants';
import { generateElements } from '../Helpers/mindmapGenerator';
import { ArchitectureData } from '../Helpers/interfaces';
import { useEffect } from 'react';

export default function MindMap({ architectureData }: { architectureData: ArchitectureData | null }) {
    // State for nodes and edges
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    // Log and update elements when architectureData changes
    useEffect(() => {
        if (architectureData) {
            console.log("New Architecture Data Received:", architectureData);
            const { nodes: newNodes, edges: newEdges } = generateElements(architectureData);
            setNodes(newNodes);
            setEdges(newEdges);
        } else {
            // Initial load with fallback data
            const { nodes: initNodes, edges: initEdges } = generateElements(fallbackData);
            setNodes(initNodes);
            setEdges(initEdges);
        }
    }, [architectureData]);

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