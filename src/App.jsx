import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [broadcast, setBroadcast] = useState('Loading Message...');
  const [broadcastPrompt, setBroadcastPrompt] = useState(false);

  //This is a useEffect hook, this will run only once because of the empty 'dependency array'.
  //The dependency array of a useEffect hook contains changing values that will trigger the code within the useEffect to run again.
  useEffect(() => {
    let message = localStorage.getItem('broadcast');
    if(message) {
      setBroadcast(message);
    } else {
      setBroadcastPrompt(true);
      setBroadcast('No broadcast message set.');
    }
  }, [])
  
  useEffect(() => { //Although this useEffect could be regarded as the opposite of a shortcut as we could run this line of code in 'handleSubmit', this gives us a good example of how and when to use useEffect.
    if(broadcast !== 'No broadcast message set.') localStorage.setItem('broadcast', broadcast);
  }, [broadcast])

  //When the form is submitted either via the button, or the user pressing enter, this function will run.
  function handleSubmit(event) {
    console.log(event)
    event.preventDefault(); //Because HTML forms typically are used to send data back to a server, their default action is to do this without us requiring the code to extract the data and send it. However, because we are not sending data externally, we are going to cancel this.
    setBroadcast(event.target[1].value); //We select target[1] and not target[0] as the button within the form counts as a target, however we want the input.
    setBroadcastPrompt(false)
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col px-5">
      <h1 className='text-3xl font-bold mb-[10vh]'>Welcome to my broadcasting system!</h1>
      {
        broadcastPrompt && (
          /* We use a form here so that we can easily extract values, especially if we have mulitple arguments. */
          /* Additionally, forms are great as they allow the user to submit them from either the submit button OR by simply pressing enter without us adding any extra functionality such as key down listeners. */
          <form className='mb-5 max-w-xl w-full flex flex-col border-[1px] border-gray-200 rounded-xl p-3' onSubmit={handleSubmit}>
            <div className='flex items-center'>
              <h1 className="broadcast text-xl font-semibold">Broadcast Menu</h1>
              <button onClick={() => setBroadcastPrompt(false)} className='border-[1px] border-red-300 ml-auto bg-red-500 text-white font-semibold aspect-square w-[30px] rounded-lg'>
              X
              </button>
            </div>
            <input className='mt-5 px-3 py-2 border-[1px] border-gray-200 my-2 rounded-lg font-light' placeholder='Your Broadcast' type="text" id="broadcast" name="broadcast" />
            <button className='border-[1px] border-blue-300 rounded-lg py-2 bg-blue-500 text-white' type="submit">Submit</button>
          </form>
        )
      }
      <h1 className='text-2xl'>
        <b>🔊 Broadcast: </b> {broadcast}
      </h1>
      <button onClick={() => {
        setBroadcastPrompt((prevValue) => !prevValue)
      }} className='fixed bottom-0 right-0 m-5 rounded-xl p-2 border-[1px] border-gray-200 aspect-square w-[50px] text-xl'>
      💬
      </button>
    </div>
  );
}

export default App;
