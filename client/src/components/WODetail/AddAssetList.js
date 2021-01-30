import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

const AddAssetList = props => {

    const [assets, updateAssets] = useState([])

    useEffect(() => { getAssets() },[])

    const getAssets = () => {
        console.log('ping')
        API.getAll('assets')
            .then((res) => {
                updateAssets(res.data)
            })
    }

    return (
        <div>
            {assets.map((a,id) => (
                <p>Hello</p>
            ))}
            </div>
    )

}

export default AddAssetList