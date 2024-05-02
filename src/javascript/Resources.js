import * as THREE from 'three'

import EventEmitter from './Utils/EventEmitter.js'
import Loader from './Utils/Loader.js'

// Matcaps
import matcapBeigeSource from '../models/matcaps/beige.png'
import matcapBlackSource from '../models/matcaps/black.png'
import matcapBlueSource from '../models/matcaps/blue.png'
import matcapBrownSource from '../models/matcaps/brown.png'
import matcapEmeraldGreenSource from '../models/matcaps/emeraldGreen.png'
import matcapGraySource from '../models/matcaps/gray.png'
import matcapGreenSource from '../models/matcaps/green.png'
import matcapMetalSource from '../models/matcaps/metal.png'
import matcapOrangeSource from '../models/matcaps/orange.png'
import matcapPurpleSource from '../models/matcaps/purple.png'
import matcapRedSource from '../models/matcaps/red.png'
import matcapWhiteSource from '../models/matcaps/white.png'
import matcapYellowSource from '../models/matcaps/yellow.png'
// import matcapGoldSource from '../models/matcaps/gold.png'

// Intro
import introStaticBaseSource from '../models/intro/static/base.glb'
import introStaticCollisionSource from '../models/intro/static/collision.glb'
import introStaticFloorShadowSource from '../models/intro/static/floorShadow.png'

import introInstructionsArrowsSource from '../models/intro/instructions/arrows.png'
import introInstructionsControlsSource from '../models/intro/instructions/controls.png'
import introInstructionsLabelsSource from '../models/intro/instructions/labels.glb'
import introInstructionsOtherSource from '../models/intro/instructions/other.png'

import introArrowKeyBaseSource from '../models/intro/arrowKey/base.glb'
import introArrowKeyCollisionSource from '../models/intro/arrowKey/collision.glb'

import introTBaseSource from '../models/intro/t/base.glb'
import introTCollisionSource from '../models/intro/t/collision.glb'

import introHBaseSource from '../models/intro/h/base.glb'
import introHCollisionSource from '../models/intro/h/collision.glb'

import introEBaseSource from '../models/intro/e/base.glb'
import introECollisionSource from '../models/intro/e/collision.glb'

import introOBaseSource from '../models/intro/o/base.glb'
import introOCollisionSource from '../models/intro/o/collision.glb'

import introMBaseSource from '../models/intro/m/base.glb'
import introMCollisionSource from '../models/intro/m/collision.glb'

import introIBaseSource from '../models/intro/i/base.glb'
import introICollisionSource from '../models/intro/i/collision.glb'

import introDBaseSource from '../models/intro/d/base.glb'
import introDCollisionSource from '../models/intro/d/collision.glb'

import introRBaseSource from '../models/intro/r/base.glb'
import introRCollisionSource from '../models/intro/r/collision.glb'

import introUBaseSource from '../models/intro/u/base.glb'
import introUCollisionSource from '../models/intro/u/collision.glb'

import introLBaseSource from '../models/intro/l/base.glb'
import introLCollisionSource from '../models/intro/l/collision.glb'


import introCreativeBaseSource from '../models/intro/creative/base.glb'
import introCreativeCollisionSource from '../models/intro/creative/collision.glb'

import introDevBaseSource from '../models/intro/dev/base.glb'
import introDevCollisionSource from '../models/intro/dev/collision.glb'

// Crossroads
import crossroadsStaticBaseSource from '../models/crossroads/static/base.glb'
import crossroadsStaticCollisionSource from '../models/crossroads/static/collision.glb'
import crossroadsStaticFloorShadowSource from '../models/crossroads/static/floorShadow.png'

// Car default
import carDefaultAntenaSource from '../models/car/default/antena.glb'
import carDefaultBackLightsBrakeSource from '../models/car/default/backLightsBrake.glb'
import carDefaultBackLightsReverseSource from '../models/car/default/backLightsReverse.glb'
import carDefaultChassisSource from '../models/car/default/chassis.glb'
import carDefaultWheelSource from '../models/car/default/wheel.glb'

// Car cyber truck
import carCyberTruckAntenaSource from '../models/car/cyberTruck/antena.glb'
import carCyberTruckBackLightsBrakeSource from '../models/car/cyberTruck/backLightsBrake.glb'
import carCyberTruckBackLightsReverseSource from '../models/car/cyberTruck/backLightsReverse.glb'
import carCyberTruckChassisSource from '../models/car/cyberTruck/chassis.glb'
import carCyberTruckWheelSource from '../models/car/cyberTruck/wheel.glb'

// Projects
import projectsBoardCollisionSource from '../models/projects/board/collision.glb'
import projectsBoardStructureFloorShadowSource from '../models/projects/board/floorShadow.png'
import projectsBoardPlaneSource from '../models/projects/board/plane.glb'
import projectsBoardStructureSource from '../models/projects/board/structure.glb'

import projectsDistinctionsAwwwardsBaseSource from '../models/projects/distinctions/awwwards/base.glb'
import projectsDistinctionsAwwwardsCollisionSource from '../models/projects/distinctions/awwwards/collision.glb'
import projectsDistinctionsCSSDABaseSource from '../models/projects/distinctions/cssda/base.glb'
import projectsDistinctionsCSSDACollisionSource from '../models/projects/distinctions/cssda/collision.glb'
import projectsDistinctionsFWABaseSource from '../models/projects/distinctions/fwa/base.glb'
import projectsDistinctionsFWACollisionSource from '../models/projects/distinctions/fwa/collision.glb'

import projectsKlabFloorSource from '../models/projects/klab/floorTexture.png'
import projectsPlageFloorSource from '../models/projects/plage/floorTexture.png'
import projectsProcyonFloorSource from '../models/projects/procyon/floorTexture.png'
import projectsSwitchedFloorSource from '../models/projects/switched/floorTexture.png'

// Information
import informationStaticBaseSource from '../models/information/static/base.glb'
import informationStaticCollisionSource from '../models/information/static/collision.glb'
import informationStaticFloorShadowSource from '../models/information/static/floorShadow.png'

import informationBaguetteBaseSource from '../models/information/baguette/base.glb'
import informationBaguetteCollisionSource from '../models/information/baguette/collision.glb'

import informationContactCvLabelSource from '../models/information/static/contactCvLabel.png'
import informationContactGithubLabelSource from '../models/information/static/contactGithubLabel.png'
import informationContactLinkedinLabelSource from '../models/information/static/contactLinkedinLabel.png'
import informationContactMailLabelSource from '../models/information/static/contactMailLabel.png'
import informationContactTwitterLabelSource from '../models/information/static/contactTwitterLabel.png'

import informationActivitiesSource from '../models/information/static/activities.png'

// Playground
import playgroundStaticBaseSource from '../models/playground/static/base.glb'
import playgroundStaticCollisionSource from '../models/playground/static/collision.glb'
import playgroundStaticFloorShadowSource from '../models/playground/static/floorShadow.png'

// Brick
import brickBaseSource from '../models/brick/base.glb'
import brickCollisionSource from '../models/brick/collision.glb'

// Horn
import hornBaseSource from '../models/horn/base.glb'
import hornCollisionSource from '../models/horn/collision.glb'

// Bowling ball
import bowlingBallBaseSource from '../models/bowlingBall/base.glb'
import bowlingBallCollisionSource from '../models/bowlingBall/collision.glb'

// Bowling pin
import bowlingPinBaseSource from '../models/bowlingPin/base.glb'
import bowlingPinCollisionSource from '../models/bowlingPin/collision.glb'

// Area
import areaEnterSource from '../models/area/enter.png'
import areaKeyEnterSource from '../models/area/keyEnter.png'
import areaOpenSource from '../models/area/open.png'
import areaQuestionMarkSource from '../models/area/questionMark.png'
import areaResetSource from '../models/area/reset.png'

// Tiles
import tilesABaseSource from '../models/tiles/a/base.glb'
import tilesACollisionSource from '../models/tiles/a/collision.glb'

import tilesBBaseSource from '../models/tiles/b/base.glb'
import tilesBCollisionSource from '../models/tiles/b/collision.glb'

import tilesCBaseSource from '../models/tiles/c/base.glb'
import tilesCCollisionSource from '../models/tiles/c/collision.glb'

import tilesDBaseSource from '../models/tiles/d/base.glb'
import tilesDCollisionSource from '../models/tiles/d/collision.glb'

import tilesEBaseSource from '../models/tiles/e/base.glb'
import tilesECollisionSource from '../models/tiles/e/collision.glb'

// Wigs
import wig1Source from '../models/wigs/wig1.glb'
import wig2Source from '../models/wigs/wig2.glb'
import wig3Source from '../models/wigs/wig3.glb'
import wig4Source from '../models/wigs/wig4.glb'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.loader = new Loader()
        this.items = {}

        this.loader.load([
            // Matcaps
            { name: 'matcapBeige', source: matcapBeigeSource, type: 'texture' },
            { name: 'matcapBlack', source: matcapBlackSource, type: 'texture' },
            { name: 'matcapOrange', source: matcapOrangeSource, type: 'texture' },
            { name: 'matcapRed', source: matcapRedSource, type: 'texture' },
            { name: 'matcapWhite', source: matcapWhiteSource, type: 'texture' },
            { name: 'matcapGreen', source: matcapGreenSource, type: 'texture' },
            { name: 'matcapBrown', source: matcapBrownSource, type: 'texture' },
            { name: 'matcapGray', source: matcapGraySource, type: 'texture' },
            { name: 'matcapEmeraldGreen', source: matcapEmeraldGreenSource, type: 'texture' },
            { name: 'matcapPurple', source: matcapPurpleSource, type: 'texture' },
            { name: 'matcapBlue', source: matcapBlueSource, type: 'texture' },
            { name: 'matcapYellow', source: matcapYellowSource, type: 'texture' },
            { name: 'matcapMetal', source: matcapMetalSource, type: 'texture' },
            // { name: 'matcapGold', source: matcapGoldSource, type: 'texture' },

            // Intro
            { name: 'introStaticBase', source: introStaticBaseSource },
            { name: 'introStaticCollision', source: introStaticCollisionSource },
            { name: 'introStaticFloorShadow', source: introStaticFloorShadowSource, type: 'texture' },

            { name: 'introInstructionsLabels', source: introInstructionsLabelsSource },
            { name: 'introInstructionsArrows', source: introInstructionsArrowsSource, type: 'texture' },
            { name: 'introInstructionsControls', source: introInstructionsControlsSource, type: 'texture' },
            { name: 'introInstructionsOther', source: introInstructionsOtherSource, type: 'texture' },

            { name: 'introArrowKeyBase', source: introArrowKeyBaseSource },
            { name: 'introArrowKeyCollision', source: introArrowKeyCollisionSource },

            { name: 'introTBase', source: introTBaseSource },
            { name: 'introTCollision', source: introTCollisionSource },

            { name: 'introHBase', source: introHBaseSource },
            { name: 'introHCollision', source: introHCollisionSource },

            { name: 'introEBase', source: introEBaseSource },
            { name: 'introECollision', source: introECollisionSource },

            { name: 'introOBase', source: introOBaseSource },
            { name: 'introOCollision', source: introOCollisionSource },

            { name: 'introMBase', source: introMBaseSource },
            { name: 'introMCollision', source: introMCollisionSource },

            { name: 'introIBase', source: introIBaseSource },
            { name: 'introICollision', source: introICollisionSource },

            { name: 'introDBase', source: introDBaseSource },
            { name: 'introDCollision', source: introDCollisionSource },

            { name: 'introRBase', source: introRBaseSource },
            { name: 'introRCollision', source: introRCollisionSource },

            { name: 'introUBase', source: introUBaseSource },
            { name: 'introUCollision', source: introUCollisionSource },

            { name: 'introLBase', source: introLBaseSource },
            { name: 'introLCollision', source: introLCollisionSource },

            { name: 'introCreativeBase', source: introCreativeBaseSource },
            { name: 'introCreativeCollision', source: introCreativeCollisionSource },

            { name: 'introDevBase', source: introDevBaseSource },
            { name: 'introDevCollision', source: introDevCollisionSource },

            // Intro
            { name: 'crossroadsStaticBase', source: crossroadsStaticBaseSource },
            { name: 'crossroadsStaticCollision', source: crossroadsStaticCollisionSource },
            { name: 'crossroadsStaticFloorShadow', source: crossroadsStaticFloorShadowSource, type: 'texture' },

            // Car default
            { name: 'carDefaultChassis', source: carDefaultChassisSource },
            { name: 'carDefaultWheel', source: carDefaultWheelSource },
            { name: 'carDefaultBackLightsBrake', source: carDefaultBackLightsBrakeSource },
            { name: 'carDefaultBackLightsReverse', source: carDefaultBackLightsReverseSource },
            { name: 'carDefaultAntena', source: carDefaultAntenaSource },
            // { name: 'carDefaultBunnyEarLeft', source: carDefaultBunnyEarLeftSource },
            // { name: 'carDefaultBunnyEarRight', source: carDefaultBunnyEarRightSource },

            // Car default
            { name: 'carCyberTruckChassis', source: carCyberTruckChassisSource },
            { name: 'carCyberTruckWheel', source: carCyberTruckWheelSource },
            { name: 'carCyberTruckBackLightsBrake', source: carCyberTruckBackLightsBrakeSource },
            { name: 'carCyberTruckBackLightsReverse', source: carCyberTruckBackLightsReverseSource },
            { name: 'carCyberTruckAntena', source: carCyberTruckAntenaSource },

            // Project
            { name: 'projectsBoardStructure', source: projectsBoardStructureSource },
            { name: 'projectsBoardCollision', source: projectsBoardCollisionSource },
            { name: 'projectsBoardStructureFloorShadow', source: projectsBoardStructureFloorShadowSource, type: 'texture' },
            { name: 'projectsBoardPlane', source: projectsBoardPlaneSource },

            { name: 'projectsDistinctionsAwwwardsBase', source: projectsDistinctionsAwwwardsBaseSource },
            { name: 'projectsDistinctionsAwwwardsCollision', source: projectsDistinctionsAwwwardsCollisionSource },
            { name: 'projectsDistinctionsFWABase', source: projectsDistinctionsFWABaseSource },
            { name: 'projectsDistinctionsFWACollision', source: projectsDistinctionsFWACollisionSource },
            { name: 'projectsDistinctionsCSSDABase', source: projectsDistinctionsCSSDABaseSource },
            { name: 'projectsDistinctionsCSSDACollision', source: projectsDistinctionsCSSDACollisionSource },

            { name: 'projectsProcyonFloor', source: projectsProcyonFloorSource, type: 'texture' },
            { name: 'projectsSwitchedFloor', source: projectsSwitchedFloorSource, type: 'texture' },
            { name: 'projectsKlabFloor', source: projectsKlabFloorSource, type: 'texture' },
            { name: 'projectsPlageFloor', source: projectsPlageFloorSource, type: 'texture' },

            // Information
            { name: 'informationStaticBase', source: informationStaticBaseSource },
            { name: 'informationStaticCollision', source: informationStaticCollisionSource },
            { name: 'informationStaticFloorShadow', source: informationStaticFloorShadowSource, type: 'texture' },

            { name: 'informationBaguetteBase', source: informationBaguetteBaseSource },
            { name: 'informationBaguetteCollision', source: informationBaguetteCollisionSource },

            { name: 'informationContactTwitterLabel', source: informationContactTwitterLabelSource, type: 'texture' },
            { name: 'informationContactGithubLabel', source: informationContactGithubLabelSource, type: 'texture' },
            { name: 'informationContactLinkedinLabel', source: informationContactLinkedinLabelSource, type: 'texture' },
            { name: 'informationContactCvLabel', source: informationContactCvLabelSource, type: 'texture' },
            { name: 'informationContactMailLabel', source: informationContactMailLabelSource, type: 'texture' },

            { name: 'informationActivities', source: informationActivitiesSource, type: 'texture' },

            // Playground
            { name: 'playgroundStaticBase', source: playgroundStaticBaseSource },
            { name: 'playgroundStaticCollision', source: playgroundStaticCollisionSource },
            { name: 'playgroundStaticFloorShadow', source: playgroundStaticFloorShadowSource, type: 'texture' },

            // Brick
            { name: 'brickBase', source: brickBaseSource },
            { name: 'brickCollision', source: brickCollisionSource },

            // Horn
            { name: 'hornBase', source: hornBaseSource },
            { name: 'hornCollision', source: hornCollisionSource },

            // Bownling ball
            { name: 'bowlingBallBase', source: bowlingBallBaseSource },
            { name: 'bowlingBallCollision', source: bowlingBallCollisionSource },

            // Bownling ball
            { name: 'bowlingPinBase', source: bowlingPinBaseSource },
            { name: 'bowlingPinCollision', source: bowlingPinCollisionSource },

            // Areas
            { name: 'areaKeyEnter', source: areaKeyEnterSource, type: 'texture' },
            { name: 'areaEnter', source: areaEnterSource, type: 'texture' },
            { name: 'areaOpen', source: areaOpenSource, type: 'texture' },
            { name: 'areaReset', source: areaResetSource, type: 'texture' },
            { name: 'areaQuestionMark', source: areaQuestionMarkSource, type: 'texture' },

            // Tiles
            { name: 'tilesABase', source: tilesABaseSource },
            { name: 'tilesACollision', source: tilesACollisionSource },

            { name: 'tilesBBase', source: tilesBBaseSource },
            { name: 'tilesBCollision', source: tilesBCollisionSource },

            { name: 'tilesCBase', source: tilesCBaseSource },
            { name: 'tilesCCollision', source: tilesCCollisionSource },

            { name: 'tilesDBase', source: tilesDBaseSource },
            { name: 'tilesDCollision', source: tilesDCollisionSource },

            { name: 'tilesEBase', source: tilesEBaseSource },
            { name: 'tilesECollision', source: tilesECollisionSource },

            // Wigs
            { name: 'wig1', source: wig1Source },
            { name: 'wig2', source: wig2Source },
            { name: 'wig3', source: wig3Source },
            { name: 'wig4', source: wig4Source },
        ])

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
