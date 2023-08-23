let participants = []; // Store the participants in an array

function startVideoCall() {
  const selectedCourse = document.getElementById('courseSelect').value;
  if (!selectedCourse) {
    alert('Please select a course.');
    return;
  }

  participants.push(selectedCourse); // Add the selected course to the participants array

  if (participants.length <= 4) {
    joinVideoCall(participants); // Join the video call with the participants
    participants = []; // Reset the participants array
  } else {
    alert('Waiting for more participants to join.'); // Display a message if there are fewer than 4 participants
  }
}

function joinVideoCall(participants) {
  const roomName = generateRoomName(); // Generate a unique room name
  const link = `https://meet.jit.si/${roomName}`; // Create the Jitsi Meet URL

  // Open a new window or tab with the Jitsi Meet URL
  const newWindow = window.open(link);

  // Optionally, display the link for manual sharing
  alert(`Share this link with the participants: ${link}`);

  setTimeout(() => {
    // Get the iframe element of the Jitsi Meet window
    const jitsiIframe = newWindow.document.querySelector('iframe');

    if (jitsiIframe) {
      const jitsiWindow = jitsiIframe.contentWindow;

      // Mute the audio in Jitsi Meet after 1 minute
      jitsiWindow.JitsiMeetJS.createLocalTracks({ devices: ['audio'] })
        .then(([audioTrack]) => {
          const localParticipant = jitsiWindow.APP.conference.getLocalParticipant();
          if (localParticipant) {
            localParticipant._setAudioMuted(true);
          }
        });
    }
  }, 1 * 60 * 1000); // 1 minute in milliseconds
}

function generateRoomName() {
  // Generate a unique room name using a timestamp
  const timestamp = new Date().getTime();
  return `video-call-${timestamp}`;
}
