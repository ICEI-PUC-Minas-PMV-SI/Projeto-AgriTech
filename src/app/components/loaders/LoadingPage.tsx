import './LoadingPage.css';

export default function LoadingPage(){
  return (
    <div className="container">
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}