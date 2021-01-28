import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

const AddAssetList = props => {

    const [assets, updateAssets] = useState([])

    useEffect(() => { getAssets() },[assets])

    const getAssets = () => {
        API.getAll('assets')
            .then((res) => {
                updateAssets(res.data)
                console.log('pinging')
            })
    }

    return (
        <p>hello</p>
    )

}

export default AddAssetList