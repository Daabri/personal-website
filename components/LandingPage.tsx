'use client'

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Camera, Code, UserCircle, Share2, Rocket, BookOpen } from 'lucide-react';

interface Tile {
  id: string;
  content: string;
  colSpan: 1 | 2;
  rowSpan: 1 | 2;
  color: string;
  icon: React.ReactNode;
}

interface BentoTileProps {
  tile: Tile;
  index: number;
}

const BentoTile: React.FC<BentoTileProps> = ({ tile, index }) => (
  <Draggable draggableId={tile.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`p-6 rounded-xl shadow-lg cursor-move
                    col-span-${tile.colSpan} row-span-${tile.rowSpan} overflow-hidden
                    ${tile.color} text-white transition-transform duration-200 ease-in-out
                    hover:scale-102 active:scale-98`}
      >
        <div className="flex items-center mb-4">
          {tile.icon}
          <h2 className="text-2xl font-bold ml-2">{tile.content}</h2>
        </div>
        <p className="text-sm">Click to explore more</p>
      </div>
    )}
  </Draggable>
);

const LandingPage: React.FC = () => {
  const [tiles, setTiles] = useState<Tile[]>([
    { id: 'tile-1', content: 'Blog Post', colSpan: 1, rowSpan: 1, color: 'bg-gradient-to-br from-purple-500 to-pink-500', icon: <BookOpen size={24} /> },
    { id: 'tile-2', content: 'Design Showcase', colSpan: 2, rowSpan: 1, color: 'bg-gradient-to-br from-blue-500 to-teal-500', icon: <Camera size={24} /> },
    { id: 'tile-3', content: 'Case Study', colSpan: 1, rowSpan: 2, color: 'bg-gradient-to-br from-orange-500 to-red-500', icon: <Code size={24} /> },
    { id: 'tile-4', content: 'Social Links', colSpan: 1, rowSpan: 1, color: 'bg-gradient-to-br from-green-500 to-teal-500', icon: <Share2 size={24} /> },
    { id: 'tile-5', content: 'About Me', colSpan: 1, rowSpan: 1, color: 'bg-gradient-to-br from-indigo-500 to-purple-500', icon: <UserCircle size={24} /> },
    { id: 'tile-6', content: 'Projects', colSpan: 2, rowSpan: 1, color: 'bg-gradient-to-br from-yellow-500 to-orange-500', icon: <Rocket size={24} /> },
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newTiles = Array.from(tiles);
    const [reorderedTile] = newTiles.splice(result.source.index, 1);
    newTiles.splice(result.destination.index, 0, reorderedTile);

    setTiles(newTiles);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <header className="flex justify-between items-center mb-12">
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          RISE
        </div>
        <nav>
          <a href="#" className="mx-2 hover:text-purple-400 transition-colors">Home</a>
          <a href="#" className="mx-2 hover:text-purple-400 transition-colors">About</a>
          <a href="#" className="mx-2 hover:text-purple-400 transition-colors">Contact</a>
        </nav>
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="bento-grid">
          {(provided) => (
            <main 
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-3 auto-rows-auto gap-4 max-w-4xl mx-auto"
            >
              {tiles.map((tile, index) => (
                <BentoTile key={tile.id} tile={tile} index={index} />
              ))}
              {provided.placeholder}
            </main>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default LandingPage;
