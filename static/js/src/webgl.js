import * as THREE from '../libs/three.module.js';
import { Scene } from './scene/scene.js';

export class WebGl {
  constructor() {
    // シーン
    this._scene;
    //レンダラー
    this._renderer;
    // DOMを追加
    this._wrapper;
    this.width, this.height;
  }

  init(wrapper) {
    const webGlOutput = wrapper;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    // シーン
    this._scene = new Scene();
    //レンダラー
    this._renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this._renderer.setClearColor(new THREE.Color(0xffffff), 1.0);
    this._renderer.setSize(this.width, this.height);
    this._renderer.setPixelRatio(1);
    this._renderer.shadowMap.enabled = true;//影に必要
    // DOMを追加
    this._wrapper = webGlOutput.appendChild(this._renderer.domElement);
    this._update = this._update.bind(this);
    this._onResize = this._onResize.bind(this);
    // リサイズ
    this._onResize(this.width, this.height);
    window.addEventListener('resize', this.onResize);
    // フレーム毎の更新
    this._update();
  }

  _update() {
    this._renderer.autoClear = true;
    this._scene.update();
    requestAnimationFrame(this._update);
    this._renderer.render(this._scene, this._scene.camera);
  }

  _onResize() {
    // console.log('webgl resize');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this._renderer.domElement.setAttribute('width', String(this.width));
    this._renderer.domElement.setAttribute('height', String(this.height));
    this._renderer.setPixelRatio(window.devicePixelRatio || 1.0);
    this._renderer.setSize(this.width, this.height);
    this._scene.camera.aspect = this.width / this.height;
    this._scene.camera.updateProjectionMatrix();
  }
}


