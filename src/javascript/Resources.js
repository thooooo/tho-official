import * as THREE from 'three'

import EventEmitter from './Utils/EventEmitter.js'
import Loader from './Utils/Loader.js'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.loader = new Loader()
        this.items = {}

        if (localStorage.getItem('lng') == 'FR') {
            this.loader.load([
                // Matcaps
                { name: 'matcapBeige', source: './models/matcaps/beige.png', type: 'texture' },
                { name: 'matcapBlack', source: './models/matcaps/black.png', type: 'texture' },
                { name: 'matcapOrange', source: './models/matcaps/orange.png', type: 'texture' },
                { name: 'matcapRed', source: './models/matcaps/red.png', type: 'texture' },
                { name: 'matcapWhite', source: './models/matcaps/white.png', type: 'texture' },
                { name: 'matcapGreen', source: './models/matcaps/green.png', type: 'texture' },
                { name: 'matcapBrown', source: './models/matcaps/brown.png', type: 'texture' },
                { name: 'matcapGray', source: './models/matcaps/gray.png', type: 'texture' },
                { name: 'matcapEmeraldGreen', source: './models/matcaps/emeraldGreen.png', type: 'texture' },
                { name: 'matcapPurple', source: './models/matcaps/purple.png', type: 'texture' },
                { name: 'matcapBlue', source: './models/matcaps/blue.png', type: 'texture' },
                { name: 'matcapYellow', source: './models/matcaps/yellow.png', type: 'texture' },
                { name: 'matcapMetal', source: './models/matcaps/metal.png', type: 'texture' },

                // Intro
                { name: 'introStaticBase', source: './models/intro/static/base.glb' },
                { name: 'introStaticCollision', source: './models/intro/static/collision.glb' },
                { name: 'introStaticFloorShadow', source: './models/intro/static/floorShadow.png', type: 'texture' },

                { name: 'introStaticFR', source: './models/intro/static/FR.png', type: 'texture' },
                { name: 'introStaticENG', source: './models/intro/static/ENG.png', type: 'texture' },

                { name: 'introInstructionsLabels', source: './models/intro/instructions/labels.glb' },
                { name: 'introInstructionsArrows', source: './models/intro/instructions/arrowsFR.png', type: 'texture' },
                { name: 'introInstructionsControls', source: './models/intro/instructions/controlsFR.png', type: 'texture' },
                { name: 'introInstructionsOther', source: './models/intro/instructions/otherFR.png', type: 'texture' },

                { name: 'introArrowKeyBase', source: './models/intro/arrowKey/base.glb' },
                { name: 'introArrowKeyCollision', source: './models/intro/arrowKey/collision.glb' },

                { name: 'introTBase', source: './models/intro/t/base.glb' },
                { name: 'introTCollision', source: './models/intro/t/collision.glb' },

                { name: 'introHBase', source: './models/intro/h/base.glb' },
                { name: 'introHCollision', source: './models/intro/h/collision.glb' },

                { name: 'introEBase', source: './models/intro/e/base.glb' },
                { name: 'introECollision', source: './models/intro/e/collision.glb' },

                { name: 'introOBase', source: './models/intro/o/base.glb' },
                { name: 'introOCollision', source: './models/intro/o/collision.glb' },

                { name: 'introMBase', source: './models/intro/m/base.glb' },
                { name: 'introMCollision', source: './models/intro/m/collision.glb' },
                
                { name: 'introIBase', source: './models/intro/i/base.glb' },
                { name: 'introICollision', source: './models/intro/i/collision.glb' },

                { name: 'introDBase', source: './models/intro/d/base.glb' },
                { name: 'introDCollision', source: './models/intro/d/collision.glb' },

                { name: 'introRBase', source: './models/intro/r/base.glb' },
                { name: 'introRCollision', source: './models/intro/r/collision.glb' },

                { name: 'introUBase', source: './models/intro/u/base.glb' },
                { name: 'introUCollision', source: './models/intro/u/collision.glb' },

                { name: 'introLBase', source: './models/intro/l/base.glb' },
                { name: 'introLCollision', source: './models/intro/l/collision.glb' },

                { name: 'introCreativeBase', source: './models/intro/creative/base.glb' },
                { name: 'introCreativeCollision', source: './models/intro/creative/collision.glb' },

                { name: 'introDevBase', source: './models/intro/dev/base.glb' },
                { name: 'introDevCollision', source: './models/intro/dev/collision.glb' },

                { name: 'crossroadsStaticBase', source: './models/crossroads/static/base.glb' },
                { name: 'crossroadsStaticCollision', source: './models/crossroads/static/collision.glb' },
                { name: 'crossroadsStaticFloorShadow', source: './models/crossroads/static/floorShadow.png', type: 'texture' },

                // Car default
                { name: 'carDefaultChassis', source: './models/car/default/chassis.glb' },
                { name: 'carDefaultWheel', source: './models/car/default/wheel.glb' },
                { name: 'carDefaultBackLightsBrake', source: './models/car/default/backLightsBrake.glb' },
                { name: 'carDefaultBackLightsReverse', source: './models/car/default/backLightsReverse.glb' },
                { name: 'carDefaultAntena', source: './models/car/default/antena.glb' },

                // Project
                { name: 'projectsBoardStructure', source: './models/projects/board/structure.glb' },
                { name: 'projectsBoardCollision', source: './models/projects/board/collision.glb' },
                { name: 'projectsBoardStructureFloorShadow', source: './models/projects/board/floorShadow.png', type: 'texture' },
                { name: 'projectsBoardPlane', source: './models/projects/board/plane.glb' },

                { name: 'projectsProcyonFloor', source: './models/projects/procyon/floorTextureFR.png', type: 'texture' },
                { name: 'projectsKlabFloor', source: './models/projects/klab/floorTextureFR.png', type: 'texture' },
                { name: 'projectsSwitchedFloor', source: './models/projects/switched/floorTextureFR.png', type: 'texture' },
                { name: 'projectsPlageFloor', source: './models/projects/plage/floorTextureFR.png', type: 'texture' },

                //Tech Watch 
                { name: 'techwatchStaticBase', source: './models/techwatch/static/base.glb' },
                { name: 'techwatchStaticCollision', source: './models/techwatch/static/collision.glb' },
                { name: 'techwatchStaticFloorShadow', source: './models/techwatch/static/floorShadow.png', type: 'texture' },

                { name: 'techwatchIntro', source: './models/techwatch/static/introFR.png', type: 'texture' },
                { name: 'techwatchTools', source: './models/techwatch/static/toolsFR.png', type: 'texture' },
                { name: 'techwatchTheme1', source: './models/techwatch/static/theme1FR.png', type: 'texture' },
                { name: 'techwatchTheme2', source: './models/techwatch/static/theme2FR.png', type: 'texture' },
                { name: 'techwatchTheme3', source: './models/techwatch/static/theme3FR.png', type: 'texture' },

                // Information
                { name: 'informationStaticBase', source: './models/information/static/base.glb' },
                { name: 'informationStaticCollision', source: './models/information/static/collision.glb' },
                { name: 'informationStaticFloorShadow', source: './models/information/static/floorShadow.png', type: 'texture' },

                { name: 'informationBaguetteBase', source: './models/information/baguette/base.glb' },
                { name: 'informationBaguetteCollision', source: './models/information/baguette/collision.glb' },

                { name: 'informationContactTwitterLabel', source: './models/information/static/contactTwitterLabel.png', type: 'texture' },
                { name: 'informationContactGithubLabel', source: './models/information/static/contactGithubLabel.png', type: 'texture' },
                { name: 'informationContactLinkedinLabel', source: './models/information/static/contactLinkedinLabel.png', type: 'texture' },
                { name: 'informationContactMailLabel', source: './models/information/static/contactMailLabel.png', type: 'texture' },

                { name: 'informationActivities', source: './models/information/static/activitiesFR.png', type: 'texture' },

                // Playground
                { name: 'playgroundStaticBase', source: './models/playground/static/base.glb' },
                { name: 'playgroundStaticCollision', source: './models/playground/static/collision.glb' },
                { name: 'playgroundStaticFloorShadow', source: './models/playground/static/floorShadow.png', type: 'texture' },

                // Brick
                { name: 'brickBase', source: './models/brick/base.glb' },
                { name: 'brickCollision', source: './models/brick/collision.glb' },

                // Horn
                { name: 'hornBase', source: './models/horn/base.glb' },
                { name: 'hornCollision', source: './models/horn/collision.glb' },

                // Bownling ball
                { name: 'bowlingBallBase', source: './models/bowlingBall/base.glb' },
                { name: 'bowlingBallCollision', source: './models/bowlingBall/collision.glb' },

                // Bownling ball
                { name: 'bowlingPinBase', source: './models/bowlingPin/base.glb' },
                { name: 'bowlingPinCollision', source: './models/bowlingPin/collision.glb' },

                // Areas
                { name: 'areaKeyEnter', source: './models/area/keyEnter.png', type: 'texture' },
                { name: 'areaEnter', source: './models/area/enter.png', type: 'texture' },
                { name: 'areaOpen', source: './models/area/open.png', type: 'texture' },
                { name: 'areaReset', source: './models/area/reset.png', type: 'texture' },
                { name: 'areaQuestionMark', source: './models/area/questionMark.png', type: 'texture' },

                // Tiles
                { name: 'tilesABase', source: './models/tiles/a/base.glb' },
                { name: 'tilesACollision', source: './models/tiles/a/collision.glb' },

                { name: 'tilesBBase', source: './models/tiles/b/base.glb' },
                { name: 'tilesBCollision', source: './models/tiles/b/collision.glb' },

                { name: 'tilesCBase', source: './models/tiles/c/base.glb' },
                { name: 'tilesCCollision', source: './models/tiles/c/collision.glb' },

                { name: 'tilesDBase', source: './models/tiles/d/base.glb' },
                { name: 'tilesDCollision', source: './models/tiles/d/collision.glb' },

                { name: 'tilesEBase', source: './models/tiles/e/base.glb' },
                { name: 'tilesECollision', source: './models/tiles/e/collision.glb' },

                // Wigs
                { name: 'wig1', source: './models/wigs/wig1.glb' },
                { name: 'wig2', source: './models/wigs/wig2.glb' },
                { name: 'wig3', source: './models/wigs/wig3.glb' },
                { name: 'wig4', source: './models/wigs/wig4.glb' },
            ])
        }
        else {
            this.loader.load([
                // Matcaps
                { name: 'matcapBeige', source: './models/matcaps/beige.png', type: 'texture' },
                { name: 'matcapBlack', source: './models/matcaps/black.png', type: 'texture' },
                { name: 'matcapOrange', source: './models/matcaps/orange.png', type: 'texture' },
                { name: 'matcapRed', source: './models/matcaps/red.png', type: 'texture' },
                { name: 'matcapWhite', source: './models/matcaps/white.png', type: 'texture' },
                { name: 'matcapGreen', source: './models/matcaps/green.png', type: 'texture' },
                { name: 'matcapBrown', source: './models/matcaps/brown.png', type: 'texture' },
                { name: 'matcapGray', source: './models/matcaps/gray.png', type: 'texture' },
                { name: 'matcapEmeraldGreen', source: './models/matcaps/emeraldGreen.png', type: 'texture' },
                { name: 'matcapPurple', source: './models/matcaps/purple.png', type: 'texture' },
                { name: 'matcapBlue', source: './models/matcaps/blue.png', type: 'texture' },
                { name: 'matcapYellow', source: './models/matcaps/yellow.png', type: 'texture' },
                { name: 'matcapMetal', source: './models/matcaps/metal.png', type: 'texture' },
    
                // Intro
                { name: 'introStaticBase', source: './models/intro/static/base.glb' },
                { name: 'introStaticCollision', source: './models/intro/static/collision.glb' },
                { name: 'introStaticFloorShadow', source: './models/intro/static/floorShadow.png', type: 'texture' },
    
                { name: 'introStaticFR', source: './models/intro/static/FR.png', type: 'texture' },
                { name: 'introStaticENG', source: './models/intro/static/ENG.png', type: 'texture' },
    
                { name: 'introInstructionsLabels', source: './models/intro/instructions/labels.glb' },
                { name: 'introInstructionsArrows', source: './models/intro/instructions/arrows.png', type: 'texture' },
                { name: 'introInstructionsControls', source: './models/intro/instructions/controls.png', type: 'texture' },
                { name: 'introInstructionsOther', source: './models/intro/instructions/other.png', type: 'texture' },
    
                { name: 'introArrowKeyBase', source: './models/intro/arrowKey/base.glb' },
                { name: 'introArrowKeyCollision', source: './models/intro/arrowKey/collision.glb' },
    
                { name: 'introTBase', source: './models/intro/t/base.glb' },
                { name: 'introTCollision', source: './models/intro/t/collision.glb' },
    
                { name: 'introHBase', source: './models/intro/h/base.glb' },
                { name: 'introHCollision', source: './models/intro/h/collision.glb' },
    
                { name: 'introEBase', source: './models/intro/e/base.glb' },
                { name: 'introECollision', source: './models/intro/e/collision.glb' },
    
                { name: 'introOBase', source: './models/intro/o/base.glb' },
                { name: 'introOCollision', source: './models/intro/o/collision.glb' },
    
                { name: 'introMBase', source: './models/intro/m/base.glb' },
                { name: 'introMCollision', source: './models/intro/m/collision.glb' },
                
                { name: 'introIBase', source: './models/intro/i/base.glb' },
                { name: 'introICollision', source: './models/intro/i/collision.glb' },
    
                { name: 'introDBase', source: './models/intro/d/base.glb' },
                { name: 'introDCollision', source: './models/intro/d/collision.glb' },
    
                { name: 'introRBase', source: './models/intro/r/base.glb' },
                { name: 'introRCollision', source: './models/intro/r/collision.glb' },
    
                { name: 'introUBase', source: './models/intro/u/base.glb' },
                { name: 'introUCollision', source: './models/intro/u/collision.glb' },
    
                { name: 'introLBase', source: './models/intro/l/base.glb' },
                { name: 'introLCollision', source: './models/intro/l/collision.glb' },
    
                { name: 'introCreativeBase', source: './models/intro/creative/base.glb' },
                { name: 'introCreativeCollision', source: './models/intro/creative/collision.glb' },
    
                { name: 'introDevBase', source: './models/intro/dev/base.glb' },
                { name: 'introDevCollision', source: './models/intro/dev/collision.glb' },
    
                { name: 'crossroadsStaticBase', source: './models/crossroads/static/base.glb' },
                { name: 'crossroadsStaticCollision', source: './models/crossroads/static/collision.glb' },
                { name: 'crossroadsStaticFloorShadow', source: './models/crossroads/static/floorShadow.png', type: 'texture' },
    
                // Car default
                { name: 'carDefaultChassis', source: './models/car/default/chassis.glb' },
                { name: 'carDefaultWheel', source: './models/car/default/wheel.glb' },
                { name: 'carDefaultBackLightsBrake', source: './models/car/default/backLightsBrake.glb' },
                { name: 'carDefaultBackLightsReverse', source: './models/car/default/backLightsReverse.glb' },
                { name: 'carDefaultAntena', source: './models/car/default/antena.glb' },
    
                // Project
                { name: 'projectsBoardStructure', source: './models/projects/board/structure.glb' },
                { name: 'projectsBoardCollision', source: './models/projects/board/collision.glb' },
                { name: 'projectsBoardStructureFloorShadow', source: './models/projects/board/floorShadow.png', type: 'texture' },
                { name: 'projectsBoardPlane', source: './models/projects/board/plane.glb' },
    
                { name: 'projectsProcyonFloor', source: './models/projects/procyon/floorTexture.png', type: 'texture' },
                { name: 'projectsKlabFloor', source: './models/projects/klab/floorTexture.png', type: 'texture' },
                { name: 'projectsSwitchedFloor', source: './models/projects/switched/floorTexture.png', type: 'texture' },
                { name: 'projectsPlageFloor', source: './models/projects/plage/floorTexture.png', type: 'texture' },
    
                //Tech Watch 
                { name: 'techwatchStaticBase', source: './models/techwatch/static/base.glb' },
                { name: 'techwatchStaticCollision', source: './models/techwatch/static/collision.glb' },
                { name: 'techwatchStaticFloorShadow', source: './models/techwatch/static/floorShadow.png', type: 'texture' },
    
                { name: 'techwatchIntro', source: './models/techwatch/static/intro.png', type: 'texture' },
                { name: 'techwatchTools', source: './models/techwatch/static/tools.png', type: 'texture' },
                { name: 'techwatchTheme1', source: './models/techwatch/static/theme1.png', type: 'texture' },
                { name: 'techwatchTheme2', source: './models/techwatch/static/theme2.png', type: 'texture' },
                { name: 'techwatchTheme3', source: './models/techwatch/static/theme3.png', type: 'texture' },
    
                // Information
                { name: 'informationStaticBase', source: './models/information/static/base.glb' },
                { name: 'informationStaticCollision', source: './models/information/static/collision.glb' },
                { name: 'informationStaticFloorShadow', source: './models/information/static/floorShadow.png', type: 'texture' },
    
                { name: 'informationBaguetteBase', source: './models/information/baguette/base.glb' },
                { name: 'informationBaguetteCollision', source: './models/information/baguette/collision.glb' },
    
                { name: 'informationContactTwitterLabel', source: './models/information/static/contactTwitterLabel.png', type: 'texture' },
                { name: 'informationContactGithubLabel', source: './models/information/static/contactGithubLabel.png', type: 'texture' },
                { name: 'informationContactLinkedinLabel', source: './models/information/static/contactLinkedinLabel.png', type: 'texture' },
                { name: 'informationContactMailLabel', source: './models/information/static/contactMailLabel.png', type: 'texture' },
    
                { name: 'informationActivities', source: './models/information/static/activities.png', type: 'texture' },
    
                // Playground
                { name: 'playgroundStaticBase', source: './models/playground/static/base.glb' },
                { name: 'playgroundStaticCollision', source: './models/playground/static/collision.glb' },
                { name: 'playgroundStaticFloorShadow', source: './models/playground/static/floorShadow.png', type: 'texture' },
    
                // Brick
                { name: 'brickBase', source: './models/brick/base.glb' },
                { name: 'brickCollision', source: './models/brick/collision.glb' },
    
                // Horn
                { name: 'hornBase', source: './models/horn/base.glb' },
                { name: 'hornCollision', source: './models/horn/collision.glb' },
    
                // Bownling ball
                { name: 'bowlingBallBase', source: './models/bowlingBall/base.glb' },
                { name: 'bowlingBallCollision', source: './models/bowlingBall/collision.glb' },
    
                // Bownling ball
                { name: 'bowlingPinBase', source: './models/bowlingPin/base.glb' },
                { name: 'bowlingPinCollision', source: './models/bowlingPin/collision.glb' },
    
                // Areas
                { name: 'areaKeyEnter', source: './models/area/keyEnter.png', type: 'texture' },
                { name: 'areaEnter', source: './models/area/enter.png', type: 'texture' },
                { name: 'areaOpen', source: './models/area/open.png', type: 'texture' },
                { name: 'areaReset', source: './models/area/reset.png', type: 'texture' },
                { name: 'areaQuestionMark', source: './models/area/questionMark.png', type: 'texture' },
    
                // Tiles
                { name: 'tilesABase', source: './models/tiles/a/base.glb' },
                { name: 'tilesACollision', source: './models/tiles/a/collision.glb' },
    
                { name: 'tilesBBase', source: './models/tiles/b/base.glb' },
                { name: 'tilesBCollision', source: './models/tiles/b/collision.glb' },
    
                { name: 'tilesCBase', source: './models/tiles/c/base.glb' },
                { name: 'tilesCCollision', source: './models/tiles/c/collision.glb' },
    
                { name: 'tilesDBase', source: './models/tiles/d/base.glb' },
                { name: 'tilesDCollision', source: './models/tiles/d/collision.glb' },
    
                { name: 'tilesEBase', source: './models/tiles/e/base.glb' },
                { name: 'tilesECollision', source: './models/tiles/e/collision.glb' },
    
                // Wigs
                { name: 'wig1', source: './models/wigs/wig1.glb' },
                { name: 'wig2', source: './models/wigs/wig2.glb' },
                { name: 'wig3', source: './models/wigs/wig3.glb' },
                { name: 'wig4', source: './models/wigs/wig4.glb' },
            ])
        }

        this.loader.on('fileEnd', (_resource, _data) =>
        {
            this.items[_resource.name] = _data

            // Texture
            if(_resource.type === 'texture')
            {
                const texture = new THREE.Texture(_data)
                texture.needsUpdate = true

                this.items[`${_resource.name}Texture`] = texture
            }

            // Trigger progress
            this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
        })

        this.loader.on('end', () =>
        {
            // Trigger ready
            this.trigger('ready')
        })
    }
}
