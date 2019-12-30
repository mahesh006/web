
var socket = io.connect('http://localhost:4000');


var message = document.getElementById('output'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('out'),
      feedback = document.getElementById('feedback');



btn.addEventListener('click', function(){
  
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})


socket.on('chat',function(data){
  feedback.innerHTML = '';
  output.innerHTML += data.handle +":"+ data.message ;
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
