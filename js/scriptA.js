var geometria = {shape: 'plane', height: 60, width: 60};
var escala = {x: 2, y: 2, z: 2 };
var posicion = {x: 0,y: 0,z: 0,};
var rotacion = { x:180, y:0, z:0 };
var animales = ['chimpance','guacamaya','leon','mapache','oso','tucan','venado'];

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
          /******************************************************************/

          animales.forEach(function(item, index){
            awe.pois.add({ id:'jsartoolkit_marker_'+(index+11), position: { x:0, y:0, z:0 }, visible: false });
            awe.projections.add({
              id: 'projection'+(index+1),
              geometry: geometria,
              scale: escala,
              position: posicion,
              rotation: rotacion,
              material: {type: 'phong',color: 0xFFFFFF},
              texture: {path: 'img/Animales/'+item+'.png'},
            }, {poi_id: 'jsartoolkit_marker_'+(index+11) });
          });

          
	        awe.plugins.view('render_effects').enable();
	        awe.plugins.view('jsartoolkit').enable();
	      },
      }, {capabilities: [], success: function() { document.body.innerHTML = '<p>Falló!</p>';},},]);
    }
  });
});