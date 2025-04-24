
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Découvrez notre méthode d'apprentissage</h2>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl relative">
          <video 
            className="w-full aspect-video"
            controls
            poster="https://images.unsplash.com/photo-1596524430615-2252b67c01be"  // Language learning poster image
          >
            <source 
              src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
              type="video/mp4" 
            />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Play className="w-16 h-16 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
