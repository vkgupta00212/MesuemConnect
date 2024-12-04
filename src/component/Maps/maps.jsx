import React, { useEffect } from 'react';
import L from 'leaflet';
import * as THREE from 'three';
import 'leaflet/dist/leaflet.css';
import './maps.css';

const maps = () => {
  useEffect(() => {
    // Initialize Leaflet map with initial coordinates
    const initialCoordinates = [23.23231778764921, 77.37806523133912];
    const map = L.map('map').setView(initialCoordinates, 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // List of locations with coordinates and popup content
    const locations = [
      {
        coordinates: [23.23231778764921, 77.37806523133912],
        title: "Indira Gandhi Manav Sangrahalaya",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEWUkUbQsz9bWCPyrFGe9TwF88TDbfz4I7KLo1YdHixKsqmnR14q5eTNdVM7Khegjg31q0rVfS1TK7BgEQyMcZFrBe5NX48LwQLbZAsZBdKJcW_r5GifJ6qCVXpnHU3m4EY_E3RCAC9myA/s1600/Kaynat+Kazi+Photography_Manav+Sangrahalay_+bhopal_2015.jpg",
        description: "Indira Gandhi Rashtriya Manav Sangrahalaya is a museum located in Bhopal, Madhya Pradesh, India.",
      },
    ];

    // Function to create popup content string
    const createPopupContent = (location) => {
      return `
        <div>
            <h3>${location.title}</h3>
            <img src="${location.image}" alt="${location.title}" style="width: 100%; height: auto; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
            <p>${location.description}</p>
        </div>
      `;
    };

    // Add markers for all locations and gather coordinates for polyline
    locations.forEach((location) => {
      L.marker(location.coordinates).addTo(map)
        .bindPopup(createPopupContent(location))
        .openPopup();
    });

    // Initialize Three.js
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('map').appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    // Adjust map and renderer size on window resize
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      map.invalidateSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default maps;
