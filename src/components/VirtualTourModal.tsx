import React, { useEffect, useRef, useState } from "react";
import { X, Maximize2, Minimize2, RotateCw, Move } from "lucide-react";
import * as THREE from "three";
// Ensure this path is correct based on your project structure
import panoramaImage from "../assets/panoramaImage.png";

const DEFAULT_PANORAMA = panoramaImage;

interface VirtualTourModalProps {
  onClose: () => void;
  imageUrl?: string;
}

export function VirtualTourModal({ onClose, imageUrl = DEFAULT_PANORAMA }: VirtualTourModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const lonRef = useRef(0);
  const latRef = useRef(0);

  
  // State for camera rotation
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  
  // Dragging state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const startLon = useRef(0);
  const startLat = useRef(0);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // --- THREE.JS INITIALIZATION ---
  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Setup Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Setup Camera
    // Start with default values, ResizeObserver will correct them immediately
    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1100);
    camera.target = new THREE.Vector3(0, 0, 0);
    cameraRef.current = camera;

    // 3. Setup Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.domElement.style.display = "block"; // Important for canvas sizing
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Create Sphere
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert geometry

    // 5. Load Texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      imageUrl,
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        setIsLoaded(true);
      },
      undefined,
      (err) => console.error("Error loading texture:", err)
    );

    // 6. Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      updateCamera();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 7. Resize Observer (Fixes the "Funny View" and "Empty Load" issues)
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        
        if (width > 0 && height > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(width, height);
        }
      }
    });

    if (mountRef.current) {
      resizeObserver.observe(mountRef.current);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      renderer.dispose();
    };
  }, [imageUrl]);

  // --- CAMERA LOGIC ---
  const updateCamera = () => {
    if (!cameraRef.current) return;

    const safeLat = Math.max(-85, Math.min(85, latRef.current));
    const phi = THREE.MathUtils.degToRad(90 - safeLat);
    const theta = THREE.MathUtils.degToRad(lonRef.current);

    const targetX = 500 * Math.sin(phi) * Math.cos(theta);
    const targetY = 500 * Math.cos(phi);
    const targetZ = 500 * Math.sin(phi) * Math.sin(theta);

    cameraRef.current.lookAt(targetX, targetY, targetZ);
  };
  // --- MOUSE HANDLERS ---
  const handleRotateLeft = () => {
    lonRef.current -= 15;
    setLon(lonRef.current);
  };

  const handleRotateRight = () => {
    lonRef.current += 15;
    setLon(lonRef.current);
  };

  const handleReset = () => {
    lonRef.current = 0;
    latRef.current = 0;
    setLon(0);
    setLat(0);
  };

  // --- MOUSE / TOUCH HANDLERS ---
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
    startLon.current = lonRef.current;
    startLat.current = latRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const sensitivity = 0.1;
    const deltaX = e.clientX - startX.current;
    const deltaY = e.clientY - startY.current;
    lonRef.current = startLon.current - deltaX * sensitivity;
    latRef.current = startLat.current + deltaY * sensitivity;
    setLon(lonRef.current);
    setLat(latRef.current);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    startLon.current = lonRef.current;
    startLat.current = latRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const sensitivity = 0.2;
    const deltaX = e.touches[0].clientX - startX.current;
    const deltaY = e.touches[0].clientY - startY.current;
    lonRef.current = startLon.current - deltaX * sensitivity;
    latRef.current = startLat.current + deltaY * sensitivity;
    setLon(lonRef.current);
    setLat(latRef.current);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-0 md:p-4 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        ref={containerRef}
        className={`relative bg-[#1E293B] rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 ${
          isFullscreen ? "fixed inset-0 w-full h-full rounded-none m-0" : "w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-7xl"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14B8A6] to-[#0F766E] px-4 md:px-6 py-4 flex items-center justify-between shrink-0 z-20 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <RotateCw size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm md:text-base">360° Virtual Tour</h3>
              <p className="text-[#5EEAD4] text-xs hidden md:block">Drag to explore • Scroll to zoom</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors text-white"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors text-white"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 360 Viewport */}
        <div className="relative flex-1 bg-black overflow-hidden w-full h-full">
          
          {/* Loading Spinner */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center z-30 bg-[#1E293B]">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-[#14B8A6]"></div>
              <p className="text-white/50 text-sm animate-pulse">Loading environment...</p>
            </div>
          )}

          {/* Three.js Canvas Mount Point */}
          <div
            ref={mountRef}
            className={`w-full h-full cursor-grab active:cursor-grabbing block touch-none ${
              !isLoaded ? 'opacity-0' : 'opacity-100'
            } transition-opacity duration-700`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            // Add touch events for mobile support
            onTouchStart={(e) => {
              isDragging.current = true;
              startX.current = e.touches[0].clientX;
              startY.current = e.touches[0].clientY;
              startLon.current = lon;
              startLat.current = lat;
            }}
            onTouchMove={(e) => {
              if (!isDragging.current) return;
              const sensitivity = 0.2; // slightly faster for touch
              const deltaX = e.touches[0].clientX - startX.current;
              const deltaY = e.touches[0].clientY - startY.current;
              setLon(startLon.current - deltaX * sensitivity);
              setLat(startLat.current + deltaY * sensitivity);
            }}
            onTouchEnd={() => {
              isDragging.current = false;
            }}
          />

          {/* UI Overlays - Always Visible & High Z-Index */}
          
          {/* Instructions */}
          <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-20 w-full flex justify-center">
            <div className="bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 flex items-center gap-2 shadow-lg">
              <Move size={14} className="text-[#5EEAD4]" />
              <p className="text-white text-xs md:text-sm font-medium whitespace-nowrap">
                Drag to Look Around
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <button
              onClick={handleRotateLeft}
              className="w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#14B8A6] border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
            >
              <span className="text-xl pb-1">←</span>
            </button>
            
            <button
              onClick={handleReset}
              className="w-12 h-12 md:w-14 md:h-14 bg-[#14B8A6] hover:bg-[#0F766E] rounded-full flex items-center justify-center shadow-lg shadow-[#14B8A6]/20 transition-all hover:scale-110 active:scale-95 text-white"
              title="Reset View"
            >
              <RotateCw size={20} />
            </button>

            <button
              onClick={handleRotateRight}
              className="w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#14B8A6] border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-sm"
            >
              <span className="text-xl pb-1">→</span>
            </button>
          </div>

          {/* Room Info Overlay */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 space-y-2 pointer-events-none z-20">
            <div className="bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg">
              <p className="text-[#5EEAD4] text-[10px] font-bold uppercase tracking-wider mb-1">Room Type</p>
              <p className="text-white text-sm md:text-base font-medium">Studio Apartment</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg">
              <p className="text-[#5EEAD4] text-[10px] font-bold uppercase tracking-wider mb-1">Price</p>
              <p className="text-white text-lg md:text-xl font-bold">₱8,500<span className="text-sm text-gray-300 font-normal">/mo</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}