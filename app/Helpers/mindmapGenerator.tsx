import React from 'react';
import type { Node, Edge } from '@xyflow/react';
import { getLayoutedElements } from './mindmapLayout';
import { data } from '@/constants';
import {
    TechStackLabel,
    SchemaModelLabel,
    APIsLabel,
    StructureFolderLabel,
    ScalingLabel
} from '../Components/MindMapLabels';

/**
 * Parses application constants into ReactFlow nodes and connects their edges,
 * automatically creating nested layouts that separate parents and leaves visually.
 */
export const generateElements = (sourceData: typeof data): { nodes: Node[], edges: Edge[] } => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    /**
     * Reusable helper to insert styled layout nodes directly into ReactFlow collections.
     */
    const addNode = (
        id: string, 
        label: React.ReactNode, 
        depth: number, 
        parentId: string | null = null, 
        lines: number = 1, 
        isParent: boolean = false
    ) => {
        // Approximate heights ensuring adequate bounding containers for content text
        const height = 50 + (lines * 26);
        
        const labelElement = (
            <div className={`w-full h-full rounded-lg border-2 p-3 shadow-sm flex flex-col ${depth === 0
                    ? 'bg-blue-600 border-blue-800 text-white justify-center items-center font-extrabold text-lg'
                    : isParent
                        ? 'bg-indigo-100 dark:bg-indigo-900 border-indigo-400 text-indigo-900 dark:text-indigo-100 justify-center items-center font-bold text-base'
                        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-normal text-sm'
                }`}>
                {label}
            </div>
        );

        nodes.push({
            id,
            position: { x: 0, y: 0 }, // Post-calculated exactly by layout generator later
            data: { label: labelElement, _height: height },
            style: { width: 300, border: 'none', padding: 0, backgroundColor: 'transparent' },
            type: depth === 0 ? 'input' : 'default',
        });

        // Link with parent via smooth arrows
        if (parentId) {
            edges.push({
                id: `${parentId}-${id}`,
                source: parentId,
                target: id,
                type: 'smoothstep',
                animated: true,
            });
        }
        return id;
    };

    // Construct the primary root head
    const rootId = addNode('root', sourceData.projectTitle, 0, null, 1, true);

    // 1. Tech Stack (Rich Table Node)
    addNode(
        'techStack', 
        <TechStackLabel techStack={sourceData.techStack} />, 
        1, 
        rootId, 
        Object.keys(sourceData.techStack).length * 2.5 + 2
    );

    // 2. Database Schema (Parent distributing Models)
    const schemaId = addNode('schema', 'Database Schema', 1, rootId, 1, true);
    sourceData.schema.forEach((model) => {
        addNode(
            `sc_${model.collection}`, 
            <SchemaModelLabel model={model} />, 
            2, 
            schemaId, 
            model.fields.length + 2
        );
    });

    // 3. APIs (Rich Table Node)
    addNode(
        'apis', 
        <APIsLabel apis={sourceData.apis} />, 
        1, 
        rootId, 
        sourceData.apis.length * 2.5 + 2
    );

    // 4. Structure (Parent distributing Folder domains)
    const structureId = addNode('structure', 'Structure', 1, rootId, 1, true);
    Object.entries(sourceData.structure).forEach(([key, val]) => {
        addNode(
            `st_${key}`, 
            <StructureFolderLabel titleKey={key} val={val} />, 
            2, 
            structureId, 
            val.length + 2
        );
    });

    // 5. Scaling (Rich Bulleted Node)
    addNode(
        'scaling', 
        <ScalingLabel scaling={sourceData.scaling} />, 
        1, 
        rootId, 
        sourceData.scaling.length * 1.5 + 2
    );

    // Yield coordinate-processed outcomes cleanly
    return getLayoutedElements(nodes, edges);
};
