
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Découvrez notre méthode d'apprentissage</h2>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <video 
            className="w-full aspect-video"
            controls
            poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
          >
            <source 
              src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
              type="video/mp4" 
            />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
