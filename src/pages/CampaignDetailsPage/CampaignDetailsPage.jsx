import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CampaignDetailsPage = () => {

  const p=useParams();


  const [campaignDetails, setCampaignDetails] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3000/campaigns/${p.id}`)
      .then(response => {
        setCampaignDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [p.id]);

  return (
    <div>
      <h1>Campaign Details</h1>
      {campaignDetails ? (
        <div>
          <h2>{campaignDetails.title}</h2>
          <p>{campaignDetails.description}</p>
          <p>Created by: {campaignDetails.userName}</p>
          <p>Email: {campaignDetails.userEmail}</p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CampaignDetailsPage;
