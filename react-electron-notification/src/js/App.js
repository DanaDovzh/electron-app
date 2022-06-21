 import React from "react";

 export default function App() {
  const arrayAdvices = [
    'If you do something bad, make sure there’s someone else around to blame.', 
    'Only boring people say they’re bored.',
    'Only chickens accomplish something by sitting on their asses.',
    'If any guy tries to hurt you, tell him I have a gun, a shovel, and an alibi.',
    'Don’t follow what you think is the right way; make your way to what you think is happiness.',
    'Don’t have sex after chopping jalapenos.',
    'If the monster comes out of the closet tonight, say hi for me then go back to sleep.',
    'Never break two laws at the same time because that’s how you get caught.',
    'Never date a girl who pays her rent in one’s.',
    'Don’t buy a bikini. Instead, get a size XXXL men’s shirt. That way, men won’t notice you.',
    'Healthy people ask for what they need and want.',
    'Don’t talk to anybody on the train, except for your mom. Well, maybe it would be best to ignore her too.',
    'If you can’t blind them with brilliance, baffle them with bullshit.',
    'Trust dogs. They always know who to stay away from.',
    'Mount from both sides so the horse becomes used to change.',
    'Treat your father-in-law like your own dad. You’ll miss him when he’s gone.',
    'When in doubt, always ask your mother.'
  ];

  function getRandomItems() {
    return +Math.floor(Math.random() * (arrayAdvices.length - 1));
  }
  function sendNotify() {
    electron.notificationApi.sendNotification(arrayAdvices[getRandomItems()]);
  }
  return (
    <button className="button" onClick={() => sendNotify()}>
      Give me a piece of advice
    </button>
  )
 }