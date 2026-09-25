"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import * as THREE from "three";

export function CameraXrayScene() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.2, 8.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    stage.appendChild(renderer.domElement);

    const rig = new THREE.Group();
    rig.rotation.set(0.12, -0.2, -0.08);
    scene.add(rig);

    scene.add(new THREE.HemisphereLight(0xd5e2de, 0x111817, 2.2));
    const keyLight = new THREE.DirectionalLight(0xd9eee8, 3.4);
    keyLight.position.set(3, 4, 6);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x71b2a0, 8, 14);
    rimLight.position.set(-4, 1, 3);
    scene.add(rimLight);

    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0x202a28,
      metalness: 0.82,
      roughness: 0.28,
    });
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xa9bab5,
      metalness: 0.9,
      roughness: 0.2,
    });
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0x6e9b90,
      emissive: 0x193e36,
      emissiveIntensity: 1.5,
      metalness: 0.7,
      roughness: 0.18,
    });
    const darkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x07100e,
      metalness: 0.25,
      roughness: 0.08,
      transmission: 0.35,
      transparent: true,
      opacity: 0.92,
    });
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x73b7a5,
      emissive: 0x163d35,
      emissiveIntensity: 0.8,
      metalness: 0.15,
      roughness: 0.05,
      transmission: 0.78,
      transparent: true,
      opacity: 0.72,
    });

    const parts: Array<{ object: THREE.Object3D; base: THREE.Vector3; explode: THREE.Vector3 }> = [];
    const addPart = (
      object: THREE.Object3D,
      base: THREE.Vector3,
      explode: THREE.Vector3
    ) => {
      object.position.copy(base);
      rig.add(object);
      parts.push({ object, base, explode });
      return object;
    };

    const body = addPart(
      new THREE.Mesh(new THREE.BoxGeometry(2.5, 2.25, 2.35), shellMaterial),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 0.1)
    );
    body.add(new THREE.Mesh(new THREE.BoxGeometry(2.05, 1.78, 1.9), darkMaterial));
    body.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(2.5, 2.25, 2.35)),
      new THREE.LineBasicMaterial({ color: 0xb9cbc5, transparent: true, opacity: 0.68 })
    ));

    const topHandle = addPart(
      new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.07, 8, 32, Math.PI), edgeMaterial),
      new THREE.Vector3(0, 1.35, 0),
      new THREE.Vector3(0, 0.35, 0)
    );
    topHandle.rotation.set(Math.PI / 2, 0, 0);

    addPart(
      new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.75, 0.5), glowMaterial),
      new THREE.Vector3(-0.35, 0.1, -1.25),
      new THREE.Vector3(-0.55, 0.1, -1.5)
    );

    const lensGroup = new THREE.Group();
    addPart(lensGroup, new THREE.Vector3(0, 0, 1.45), new THREE.Vector3(1.4, 0, 1.75));
    lensGroup.rotation.y = Math.PI / 2;

    const lensCore = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.38, 48), glassMaterial);
    lensCore.rotation.z = Math.PI / 2;
    lensGroup.add(lensCore);

    const lensRings: THREE.Mesh[] = [];
    [0.48, 0.72, 0.94, 1.16].forEach((radius, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, index === 3 ? 0.065 : 0.045, 8, 48),
        index % 2 === 0 ? edgeMaterial : glowMaterial
      );
      ring.rotation.y = Math.PI / 2;
      ring.position.z = index * 0.18;
      lensGroup.add(ring);
      lensRings.push(ring);
    });

    const innerLens = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 32), darkMaterial);
    innerLens.rotation.z = Math.PI / 2;
    innerLens.position.z = 0.73;
    lensGroup.add(innerLens);

    [-0.78, 0.78].forEach((x) => {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.48, 2.85), edgeMaterial);
      addPart(rail, new THREE.Vector3(x, 0, 0), new THREE.Vector3(x * 1.35, 0, 0));
    });

    const filmRings: THREE.Mesh[] = [];
    [-1.1, -0.75, 0.75, 1.1].forEach((x, index) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.92, 0.055, 8, 48),
        index % 2 === 0 ? edgeMaterial : glowMaterial
      );
      ring.rotation.y = Math.PI / 2;
      addPart(ring, new THREE.Vector3(0, 0, x), new THREE.Vector3(0, 0, x * 2.1));
      filmRings.push(ring);
    });

    const gear = new THREE.Group();
    addPart(gear, new THREE.Vector3(0, 0, -1.48), new THREE.Vector3(-1.35, 0, -1.9));
    for (let i = 0; i < 12; i += 1) {
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.14), glowMaterial);
      tooth.position.set(Math.cos((i / 12) * Math.PI * 2) * 0.94, Math.sin((i / 12) * Math.PI * 2) * 0.94, 0);
      tooth.rotation.z = (i / 12) * Math.PI * 2;
      gear.add(tooth);
    }
    const gearRing = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.08, 8, 36), edgeMaterial);
    gear.add(gearRing);

    const axis = new THREE.AxesHelper(2.8);
    axis.material = new THREE.LineBasicMaterial({ color: 0x6e9b90, transparent: true, opacity: 0.16 });
    axis.visible = false;
    rig.add(axis);

    const progress = { value: 0 };
    let currentAnimation: ReturnType<typeof animate> | null = null;
    let frame = 0;
    let lastProgress = -1;

    const resize = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const render = () => {
      const value = progress.value;
      const smooth = value * value * (3 - 2 * value);
      rig.rotation.y = -0.2 + smooth * 0.72;
      rig.rotation.x = 0.12 + Math.sin(smooth * Math.PI) * 0.18;
      rig.rotation.z = -0.08 - smooth * 0.12;
      rig.position.y = Math.sin(smooth * Math.PI) * 0.16;
      rig.scale.setScalar(1 - smooth * 0.08);
      parts.forEach(({ object, base, explode }) => object.position.lerpVectors(base, explode, smooth));
      lensRings.forEach((ring, index) => {
        ring.rotation.x += 0.002 + index * 0.0005;
        ring.rotation.z += 0.003 + index * 0.0006;
      });
      filmRings.forEach((ring, index) => {
        ring.rotation.x += 0.0015 * (index % 2 ? -1 : 1);
      });
      gear.rotation.z += 0.004;
      axis.visible = smooth > 0.56;
      if (Math.abs(value - lastProgress) > 0.001) {
        renderer.render(scene, camera);
        lastProgress = value;
      }
      frame = requestAnimationFrame(render);
    };

    const updateFromScroll = () => {
      const bounds = stage.getBoundingClientRect();
      const next = Math.max(0, Math.min(1, (window.innerHeight * 0.82 - bounds.top) / (window.innerHeight * 0.95)));
      currentAnimation?.pause();
      currentAnimation = animate(progress, {
        value: next,
        duration: 520,
        ease: "out(3)",
      });
    };

    resize();
    updateFromScroll();
    render();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateFromScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      currentAnimation?.pause();
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateFromScroll);
      renderer.dispose();
      stage.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div ref={stageRef} className="vito-camera-stage" aria-label="Exploded cinematic camera animation" role="img">
      <div className="vito-camera-stage__grid" aria-hidden="true" />
      <div className="vito-camera-stage__label" aria-hidden="true">X-RAY MEDIA SYSTEM / 04</div>
      <div className="vito-camera-stage__status" aria-hidden="true"><i /> SCROLL TO DISASSEMBLE</div>
    </div>
  );
}
