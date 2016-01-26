/**
 * HTML5 Media Events
 * 
 * -----------------------------
 * Event           Description
 * -----------------------------
 * abort           Fires when the loading of an audio/video is aborted
 * canplay         Fires when the browser can start playing the audio/video
 * canplaythrough  Fires when the browser can play through the audio/video without stopping for buffering
 * durationchange  Fires when the duration of the audio/video is changed
 * emptied         Fires when the current playlist is empty
 * ended           Fires when the current playlist is ended
 * error           Fires when an error occurred during the loading of an audio/video
 * loadeddata      Fires when the browser has loaded the current frame of the audio/video
 * loadedmetadata  Fires when the browser has loaded meta data for the audio/video
 * loadstart       Fires when the browser starts looking for the audio/video
 * pause           Fires when the audio/video has been paused
 * play            Fires when the audio/video has been started or is no longer paused
 * playing         Fires when the audio/video is playing after having been paused or stopped for buffering
 * progress        Fires when the browser is downloading the audio/video
 * ratechange      Fires when the playing speed of the audio/video is changed
 * seeked          Fires when the user is finished moving/skipping to a new position in the audio/video
 * seeking         Fires when the user starts moving/skipping to a new position in the audio/video
 * stalled         Fires when the browser is trying to get media data, but data is not available
 * suspend         Fires when the browser is intentionally not getting media data
 * timeupdate      Fires when the current playback position has changed
 * volumechange    Fires when the volume has been changed
 * waiting         Fires when the video stops because it needs to buffer the next frame
 */

var video = videojs("video1").ready(function (event) {

  
  var _this = this;


  this.on('progress', function (e) {

    var duration = Math.round(_this.duration()),
        current  = Math.round(_this.currentTime())
    
    console.log('duration, current', duration, current)

    // circle.text.value = current;


  })



  this.on('canplaythrough', function (e) {

    var duration = Math.round(_this.duration()),
        current  = Math.round(_this.currentTime());

    // play
    this.play()

    var circle = new ProgressBar.Circle('#video1--progress', {
      color: '#fff',
      // This has to be the same size as the maximum width to prevent clipping
      strokeWidth: 10,
      trailWidth: 0,
      easing: 'linear',
      duration: (duration * 1000),

      from: { color: '#fff', width: 1 },
      to: { color: '#fff', width: 10 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
      }
    });

    circle.animate(1.0, function() {
      
    })

  })



  
  
})