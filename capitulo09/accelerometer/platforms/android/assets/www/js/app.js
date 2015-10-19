var app = {

    getCurrentAcceleration: function(){
      if (navigator.accelerometer){
        var me = this;
        navigator.accelerometer.getCurrentAcceleration(me.onSuccess, me.onError);
      }
    },

    onSuccess(): function{
      document.getElementById("x").innerHTML = acceleration.x;
      document.getElementById("y").innerHTML = acceleration.y;
      document.getElementById("z").innerHTML = acceleration.z ;
      document.getElementById("timestamp").innerHTML = acceleration.timestamp ;
    },

    onError(): function{
        alert('Erro!');
    },

    watchAcceleration: function(){

      if (navigator.accelerometer){
        var me = this;
        var options = { frequency: 3000 };  // atualiza a cada 3 segundos
        me.watchID = navigator.accelerometer.watchAcceleration(me.onSuccess, me.onError, options);
      }
    },

    clearWatch: function(){

        if (me.watchID && navigator.accelerometer){
            navigator.accelerometer.clearWatch(me.watchID);
        }
    }
};
