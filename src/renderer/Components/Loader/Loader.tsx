export default function Loader({message="Loading ...."}) {
  return (
   <div className="Container"  >
     <div
      style={{
        height: 350,
        width: 600,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: "translate(-50%,-50%)",
        backgroundColor:'#6997DB',
        borderRadius:20,
        boxShadow: `3.994px 22.651px 57px  rgba(249, 103, 103, 0.259)`,
        backgroundImage: `linear-gradient(to right, #F9B035 0%, #F98C4E 53%, #F96767 100%)`,
        zIndex:10
      }}
    >
      <div id="loader">
      <div id="shadow"></div>
      <div id="box"></div>


      </div>
      <div style={{margin:10}} className="loadingText">{message}</div>
    </div>

    </div>
  );
}
