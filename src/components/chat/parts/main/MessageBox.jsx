
export default function MessageBox({message, messagePostaion}) {

    
  return <>
  
              <div
                className={`newMessege ${messagePostaion}`}
              >
                <div className="messege">
                  
                  <div className="messege-header">
                    <p>{message.username}</p>
                  </div>
                  <div className="messege-main">
                    {
                        <p>{message.message}</p>
                    }
                  </div>
                  <div className="messege-bottom">
                    <p>{message.timestamp}</p>
                  </div>
                </div>
              </div>
  </>
}
