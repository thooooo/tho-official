import gsap from 'gsap'
import * as THREE from 'three'
import Project from './Project'

export default class ProjectsSection
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
            this.debugFolder = this.debug.addFolder('projects')
            this.debugFolder.open()
        }

        // Set up
        this.items = []

        this.interDistance = 24
        this.positionRandomess = 5
        this.projectHalfWidth = 9

        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.container.updateMatrix()

        this.setGeometries()
        this.setMeshes()
        this.setList()
        this.setZone()

        // Add all project from the list
        for(const _options of this.list)
        {
            this.add(_options)
        }
    }

    setGeometries()
    {
        this.geometries = {}
        this.geometries.floor = new THREE.PlaneGeometry(16, 8)
    }

    setMeshes()
    {
        this.meshes = {}

        // this.meshes.boardStructure = this.objects.getConvertedMesh(this.resources.items.projectsBoardStructure.scene.children, { floorShadowTexture: this.resources.items.projectsBoardStructureFloorShadowTexture })
        this.resources.items.areaOpenTexture.magFilter = THREE.NearestFilter
        this.resources.items.areaOpenTexture.minFilter = THREE.LinearFilter
        this.meshes.boardPlane = this.resources.items.projectsBoardPlane.scene.children[0]
        this.meshes.areaLabel = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.5), new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, color: 0xffffff, alphaMap: this.resources.items.areaOpenTexture }))
        this.meshes.areaLabel.matrixAutoUpdate = false
    }

    setList()
    {
        this.list = [
            {
                name: 'Procyon SARL',
                imageSources:
                [
                    './models/projects/procyon/slideA.jpg',
                    './models/projects/procyon/slideB.jpg',
                    './models/projects/procyon/slideC.jpg',
                    './models/projects/procyon/slideD.jpg',
                ],
                floorTexture: this.resources.items.projectsProcyonFloorTexture,
                link:
                {
                    href: 'https://procyon-official.netlify.app',
                    x: - 4.8,
                    y: - 3,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                }
            },
            {
                name: 'Switched',
                imageSources:
                [
                    './models/projects/switched/slideA.jpg',
                    './models/projects/switched/slideB.jpg',
                    './models/projects/switched/slideC.jpg',
                ],
                floorTexture: this.resources.items.projectsSwitchedFloorTexture,
                link:
                {
                    href: 'https://swarwerth.github.io/switched.github.io/en/index.html',
                    x: - 4.8,
                    y: - 3.5,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                }
            },
            {
                name: 'Klab',
                imageSources:
                [
                    './models/projects/klab/slideA.jpg',
                    './models/projects/klab/slideB.jpg',
                    './models/projects/klab/slideC.jpg',
                ],
                floorTexture: this.resources.items.projectsKlabFloorTexture,
                link:
                {
                    href: 'https://k-lab.netlify.app/',
                    x: - 4.8,
                    y: - 4.5,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                }
            },
            {
                name: 'Plage',
                imageSources:
                [
                    './models/projects/plage/slideA.jpg',
                    './models/projects/plage/slideB.jpg',
                    './models/projects/plage/slideC.jpg',
                    './models/projects/plage/slideD.jpg',
                    './models/projects/plage/slideE.jpg',
                    './models/projects/plage/slideF.jpg',
                ],
                link:
                {
                    href: 'https://www.economie.gouv.fr/dgfip',
                    x: - 4.8,
                    y: - 4,
                    halfExtents:
                    {
                        x: 3.2,
                        y: 1.5
                    }
                },
                floorTexture: this.resources.items.projectsPlageFloorTexture
            }
        ]
    }

    setZone()
    {
        const totalWidth = this.list.length * (this.interDistance / 2)

        const zone = this.zones.add({
            position: { x: this.x + totalWidth - this.projectHalfWidth - 6, y: this.y },
            halfExtents: { x: totalWidth, y: 12 },
            data: { cameraAngle: 'projects' }
        })

        zone.on('in', (_data) =>
        {
            this.camera.angle.set(_data.cameraAngle)
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: 0, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: 0, duration: 2 })
        })

        zone.on('out', () =>
        {
            this.camera.angle.set('default')
            gsap.to(this.passes.horizontalBlurPass.material.uniforms.uStrength.value, { x: this.passes.horizontalBlurPass.strength, duration: 2 })
            gsap.to(this.passes.verticalBlurPass.material.uniforms.uStrength.value, { y: this.passes.verticalBlurPass.strength, duration: 2 })
        })
    }

    add(_options)
    {
        const x = this.x + this.items.length * this.interDistance
        let y = this.y
        if(this.items.length > 0)
        {
            y += (Math.random() - 0.5) * this.positionRandomess
        }

        // Create project
        const project = new Project({
            time: this.time,
            resources: this.resources,
            objects: this.objects,
            areas: this.areas,
            geometries: this.geometries,
            meshes: this.meshes,
            debug: this.debugFolder,
            x: x,
            y: y,
            ..._options
        })

        this.container.add(project.container)

        // Add tiles
        if(this.items.length >= 1)
        {
            const previousProject = this.items[this.items.length - 1]
            const start = new THREE.Vector2(previousProject.x + this.projectHalfWidth, previousProject.y)
            const end = new THREE.Vector2(project.x - this.projectHalfWidth, project.y)
            const delta = end.clone().sub(start)
            this.tiles.add({
                start: start,
                delta: delta
            })
        }

        // Save
        this.items.push(project)
    }
}
