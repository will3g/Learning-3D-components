import React, { Component } from 'react';
import * as THREE from "three";

const image = 'https://img.freepik.com/free-vector/ice-cream-melted-yellow-seamless-wafer-texture-background_87561-142.jpg?size=338&ext=jpg';

export default class Cubo extends Component {

    componentDidMount() {
        let scene = new THREE.Scene();

        let texture = new THREE.TextureLoader().load(image);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);

        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let geometry = new THREE.BoxGeometry(3, 3, 3);

        let material = new THREE.MeshBasicMaterial({ map: texture });

        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        let animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.0;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();
    }

    render() {
        return (
            <div />
        )
    }
}