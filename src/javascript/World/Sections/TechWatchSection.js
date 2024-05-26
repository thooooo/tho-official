import * as THREE from 'three'

export default class TechWatchSection
{
    constructor(_options)
    {
        // Options
        this.time = _options.time
        this.resources = _options.resources
        this.camera = _options.camera
        this.passes = _options.passes
        this.objects = _options.objects
        this.areas = _options.areas
        this.zones = _options.zones
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder('techwatchSection')
            // this.debugFolder.open()
        }

        // Set up
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false

        this.setStatic()
        this.setIntro()
        this.setTools()
        this.setTheme1()
        this.setTheme2()
        this.setTheme3()
        this.setZone()
    }

    setStatic()
    {
        this.objects.add({
            base: this.resources.items.techwatchStaticBase.scene,
            collision: this.resources.items.techwatchStaticCollision.scene,
            floorShadowTexture: this.resources.items.techwatchStaticFloorShadowTexture,
            offset: new THREE.Vector3(this.x, this.y, 0),
            mass: 0
        })
    }

    setIntro()
    {
        // Set up
        this.activities = {}
        this.activities.x = this.x + 10
        this.activities.y = this.y - 3
        this.activities.multiplier = 7

        // Geometry
        this.activities.geometry = new THREE.PlaneBufferGeometry(2 * this.activities.multiplier, 1 * this.activities.multiplier, 1, 1)

        // Texture
        this.activities.texture = this.resources.items.techwatchIntroTexture
        this.activities.texture.magFilter = THREE.NearestFilter
        this.activities.texture.minFilter = THREE.LinearFilter

        // Material
        this.activities.material = new THREE.MeshBasicMaterial({ wireframe: false, color: 0xffffff, alphaMap: this.activities.texture, transparent: true })

        // Mesh
        this.activities.mesh = new THREE.Mesh(this.activities.geometry, this.activities.material)
        this.activities.mesh.position.x = this.activities.x
        this.activities.mesh.position.y = this.activities.y
        this.activities.mesh.matrixAutoUpdate = false
        this.activities.mesh.updateMatrix()
        this.container.add(this.activities.mesh)
    }

    setTools()
    {
        // Set up
        this.activities = {}
        this.activities.x = this.x - 5
        this.activities.y = this.y + 8
        this.activities.multiplier = 7

        // Geometry
        this.activities.geometry = new THREE.PlaneBufferGeometry(2 * this.activities.multiplier, 1 * this.activities.multiplier, 1, 1)

        // Texture
        this.activities.texture = this.resources.items.techwatchToolsTexture
        this.activities.texture.magFilter = THREE.NearestFilter
        this.activities.texture.minFilter = THREE.LinearFilter

        // Material
        this.activities.material = new THREE.MeshBasicMaterial({ wireframe: false, color: 0xffffff, alphaMap: this.activities.texture, transparent: true })

        // Mesh
        this.activities.mesh = new THREE.Mesh(this.activities.geometry, this.activities.material)
        this.activities.mesh.position.x = this.activities.x
        this.activities.mesh.position.y = this.activities.y
        this.activities.mesh.matrixAutoUpdate = false
        this.activities.mesh.updateMatrix()
        this.container.add(this.activities.mesh)
    }

    setTheme1() {
        // Set up
        this.activities = {}
        this.activities.x = this.x - 22
        this.activities.y = this.y + 9
        this.activities.multiplier = 7

        // Geometry
        this.activities.geometry = new THREE.PlaneBufferGeometry(2 * this.activities.multiplier, 1 * this.activities.multiplier, 1, 1)

        // Texture
        this.activities.texture = this.resources.items.techwatchTheme1Texture
        this.activities.texture.magFilter = THREE.NearestFilter
        this.activities.texture.minFilter = THREE.LinearFilter

        // Material
        this.activities.material = new THREE.MeshBasicMaterial({ wireframe: false, color: 0xffffff, alphaMap: this.activities.texture, transparent: true })

        // Mesh
        this.activities.mesh = new THREE.Mesh(this.activities.geometry, this.activities.material)
        this.activities.mesh.position.x = this.activities.x
        this.activities.mesh.position.y = this.activities.y
        this.activities.mesh.matrixAutoUpdate = false
        this.activities.mesh.updateMatrix()
        this.container.add(this.activities.mesh)
    }

    setTheme2() { 
        // Set up
        this.activities = {}
        this.activities.x = this.x - 33
        this.activities.y = this.y - 3
        this.activities.multiplier = 7

        // Geometry
        this.activities.geometry = new THREE.PlaneBufferGeometry(2 * this.activities.multiplier, 1 * this.activities.multiplier, 1, 1)

        // Texture
        this.activities.texture = this.resources.items.techwatchTheme2Texture
        this.activities.texture.magFilter = THREE.NearestFilter
        this.activities.texture.minFilter = THREE.LinearFilter

        // Material
        this.activities.material = new THREE.MeshBasicMaterial({ wireframe: false, color: 0xffffff, alphaMap: this.activities.texture, transparent: true })

        // Mesh
        this.activities.mesh = new THREE.Mesh(this.activities.geometry, this.activities.material)
        this.activities.mesh.position.x = this.activities.x
        this.activities.mesh.position.y = this.activities.y
        this.activities.mesh.matrixAutoUpdate = false
        this.activities.mesh.updateMatrix()
        this.container.add(this.activities.mesh)
    }

    setTheme3() { 
        // Set up
        this.activities = {}
        this.activities.x = this.x - 45
        this.activities.y = this.y + 9
        this.activities.multiplier = 7

        // Geometry
        this.activities.geometry = new THREE.PlaneBufferGeometry(2 * this.activities.multiplier, 1 * this.activities.multiplier, 1, 1)

        // Texture
        this.activities.texture = this.resources.items.techwatchTheme3Texture
        this.activities.texture.magFilter = THREE.NearestFilter
        this.activities.texture.minFilter = THREE.LinearFilter

        // Material
        this.activities.material = new THREE.MeshBasicMaterial({ wireframe: false, color: 0xffffff, alphaMap: this.activities.texture, transparent: true })

        // Mesh
        this.activities.mesh = new THREE.Mesh(this.activities.geometry, this.activities.material)
        this.activities.mesh.position.x = this.activities.x
        this.activities.mesh.position.y = this.activities.y
        this.activities.mesh.matrixAutoUpdate = false
        this.activities.mesh.updateMatrix()
        this.container.add(this.activities.mesh)
    }

    setZone()
    {
        const totalWidth = 1024;

        const zone = this.zones.add({
            position: { x: this.x - totalWidth + 20, y: this.y},
            halfExtents: { x: totalWidth, y: 20 },
            data: { cameraAngle: 'projects' }
        })

        zone.on('in', (_data) =>
        {
            this.camera.angle.set(_data.cameraAngle)
            TweenLite.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, 2, { x: 0 })
            TweenLite.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, 2, { y: 0 })
        })

        zone.on('out', () =>
        {
            this.camera.angle.set('default')
            TweenLite.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, 2, { x: this.passes.horizontalBlurPass.strength })
            TweenLite.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, 2, { y: this.passes.verticalBlurPass.strength })
        })
    }
}
