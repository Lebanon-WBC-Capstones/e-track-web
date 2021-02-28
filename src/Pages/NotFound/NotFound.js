import notFound from '../../assets/images/PagenotFound.png';
function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <img src={notFound} alt="notFound" className="w-1/3" />
    </div>
  );
}
export default NotFound;
