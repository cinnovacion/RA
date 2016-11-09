var geometria = {shape: 'plane', height: 60, width: 60};
var escala = {x: 2, y: 2, z: 2 };
var posicion = {x: 0,y: 0,z: 0,};
var rotacion = { x:180, y:0, z:0 };

window.addEventListener('load', function() {
  window.awe.init({
    device_type: awe.AUTO_DETECT_DEVICE_TYPE,
    settings: {
    	container_id: 'container',
      default_camera_position: { x:0, y:0, z:0 },
      default_lights:[
        {id: 'ambient_light', type: 'ambient', color: 0x666666},
        {id: 'hemi', type: 'hemisphere', color: 0xCCCCCC,},
      ],
    },
    ready: function() {
      var d = '?_='+Date.now();
      
      awe.util.require([{
        capabilities: ['gum','webgl'],
        files: [ 
          ['js/libs/awe-standard-dependencies.js', 'js/libs/awe-standard.js'+d],// base libraries
          ['js/libs/awe-jsartoolkit-dependencies.js','js/libs/plugins/StereoEffect.js', 'js/libs/plugins/VREffect.js'],// plugin dependencies
          ['js/libs/awe.marker_ar.js'+d,'js/libs/plugins/awe.rendering_effects.js'+d]// plugins
        ],
        success: function() { 
					awe.setup_scene();
					awe.settings.update({data:{value: 'ar'}, where:{id: 'view_mode'}});
          /******************************************************************

          awe.pois.add({ id:'jsartoolkit_marker_64', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projectionP',
            geometry: {shape: 'plane', height: 60, width: 60},
            scale: {x: 5, y: 5, z: 5 },
            position: {x: 0,y: 0,z: 0,},
            rotation: { x:180, y:0, z:0 },
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/giraffa.png'},
          }, {poi_id: 'jsartoolkit_marker_64' });

          /********************************************************************/

          awe.pois.add({ id:'jsartoolkit_marker_11', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection1',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsA.png'},
          }, {poi_id: 'jsartoolkit_marker_11' });

          awe.pois.add({ id:'jsartoolkit_marker_12', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection2',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsB.png'},
          }, {poi_id: 'jsartoolkit_marker_12' });

          awe.pois.add({ id:'jsartoolkit_marker_13', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection3',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsC.png'},
          }, {poi_id: 'jsartoolkit_marker_13' });

          awe.pois.add({ id:'jsartoolkit_marker_14', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection4',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsD.png'},
          }, {poi_id: 'jsartoolkit_marker_14' });

          awe.pois.add({ id:'jsartoolkit_marker_15', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection5',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsE.png'},
          }, {poi_id: 'jsartoolkit_marker_15' });

          awe.pois.add({ id:'jsartoolkit_marker_16', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection6',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsF.png'},
          }, {poi_id: 'jsartoolkit_marker_16' });

          awe.pois.add({ id:'jsartoolkit_marker_17', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection7',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsG.png'},
          }, {poi_id: 'jsartoolkit_marker_17' });

          awe.pois.add({ id:'jsartoolkit_marker_18', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection8',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsH.png'},
          }, {poi_id: 'jsartoolkit_marker_18' });

          awe.pois.add({ id:'jsartoolkit_marker_19', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection9',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsI.png'},
          }, {poi_id: 'jsartoolkit_marker_19' });

          awe.pois.add({ id:'jsartoolkit_marker_20', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection10',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsJ.png'},
          }, {poi_id: 'jsartoolkit_marker_20' });

          awe.pois.add({ id:'jsartoolkit_marker_21', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection11',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsK.png'},
          }, {poi_id: 'jsartoolkit_marker_21' });

          awe.pois.add({ id:'jsartoolkit_marker_22', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection12',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsL.png'},
          }, {poi_id: 'jsartoolkit_marker_22' });

          //

          awe.pois.add({ id:'jsartoolkit_marker_23', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection13',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsM.png'},
          }, {poi_id: 'jsartoolkit_marker_23' });

          awe.pois.add({ id:'jsartoolkit_marker_24', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection14',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsN.png'},
          }, {poi_id: 'jsartoolkit_marker_24' });

          awe.pois.add({ id:'jsartoolkit_marker_25', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection15',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsNH.png'},
          }, {poi_id: 'jsartoolkit_marker_25' });

          awe.pois.add({ id:'jsartoolkit_marker_26', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection16',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsO.png'},
          }, {poi_id: 'jsartoolkit_marker_26' });

          awe.pois.add({ id:'jsartoolkit_marker_27', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection17',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsP.png'},
          }, {poi_id: 'jsartoolkit_marker_27' });

          awe.pois.add({ id:'jsartoolkit_marker_28', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection18',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsQ.png'},
          }, {poi_id: 'jsartoolkit_marker_28' });

          awe.pois.add({ id:'jsartoolkit_marker_29', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection19',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsR.png'},
          }, {poi_id: 'jsartoolkit_marker_29' });

          awe.pois.add({ id:'jsartoolkit_marker_30', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection20',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsS.png'},
          }, {poi_id: 'jsartoolkit_marker_30' });

          awe.pois.add({ id:'jsartoolkit_marker_31', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection21',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsT.png'},
          }, {poi_id: 'jsartoolkit_marker_31' });

          awe.pois.add({ id:'jsartoolkit_marker_32', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection22',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsU.png'},
          }, {poi_id: 'jsartoolkit_marker_32' });

          awe.pois.add({ id:'jsartoolkit_marker_33', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection23',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsV.png'},
          }, {poi_id: 'jsartoolkit_marker_33' });

          awe.pois.add({ id:'jsartoolkit_marker_34', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection24',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsW.png'},
          }, {poi_id: 'jsartoolkit_marker_34' });

          awe.pois.add({ id:'jsartoolkit_marker_35', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection25',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsX.png'},
          }, {poi_id: 'jsartoolkit_marker_35' });

          awe.pois.add({ id:'jsartoolkit_marker_36', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection26',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsY.png'},
          }, {poi_id: 'jsartoolkit_marker_36' });

          awe.pois.add({ id:'jsartoolkit_marker_37', position: { x:0, y:0, z:0 }, visible: false });
          awe.projections.add({
            id: 'projection27',
            geometry: geometria,
            scale: escala,
            position: posicion,
            rotation: rotacion,
            material: {type: 'phong',color: 0xFFFFFF},
            texture: {path: 'img/Bits/BitsZ.png'},
          }, {poi_id: 'jsartoolkit_marker_37' });


          /********************************************************************/
	        awe.plugins.view('render_effects').enable();
	        awe.plugins.view('jsartoolkit').enable();
	      },
      }, {capabilities: [], success: function() { document.body.innerHTML = '<p>Falló!</p>';},},]);
    }
  });
});