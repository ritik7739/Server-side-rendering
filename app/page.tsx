import Image from "next/image";
import axios from 'axios'

async function getUserdetail(){
  const response= await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return response.data
}

export default async function Home() {
  const userData= await getUserdetail();
  return (
    <div className="text-center mt-5">
      <div>
         {userData.name}  
      </div>
        {userData.email}
    </div>
  );
}
