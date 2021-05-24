const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('name');
const spawn = urlParams.get('spawn');

document.addEventListener('DOMContentLoaded', () => {                           
  const scene = document.querySelector('a-scene');
  const sceneLoaded = () => {
    if ( userName && spawn ) {
        document.getElementById("teacher").setAttribute("networked", "template:#player-template;attachTemplateToLocal:false;");
        document.getElementById("constraint-teacher").setAttribute("networked", "template:#constraint-teacher-avatar-template;attachTemplateToLocal:false;");
        
    }
  }
  if (scene.hasLoaded) {                                                         
    sceneLoaded();
  } else {
    scene.addEventListener('loaded', sceneLoaded);
  }
});

AFRAME.registerComponent('name-up-teacher', {
    
    schema: {
        name: { default: userName }
    },

    update: function () {
        var el = this.el;

        el.setAttribute("text-geometry", { value: this.data.name });
        el.setAttribute('material', {
            color: 'yellow',
            font: 'https://cdn.aframe.io/fonts/Exo2SemiBold.fnt'
        });
        el.setAttribute('rotation',
            '0 180 0',
        );
        el.setAttribute('position', {
            x: 0.4, y: 0.25, z: 0,
        });
        el.setAttribute('scale',
            '0.32 0.32 0.32',
        );
    }
});