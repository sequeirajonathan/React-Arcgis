import React, { useEffect } from 'react';
import { WebMap, WebScene } from '@esri/react-arcgis';

// Recoil State
import { useRecoilState } from 'recoil';

interface Dimensions {
    width: string; // <WIDTH>vw
    height: string; // <HEIGHT>vh
}

interface IProps {
    container_dimensions: Dimensions
    id: string,
    map_type: string // '2D'|'3D'
}

const WebMapView: React.FC<IProps> = ({ id, map_type, container_dimensions }: IProps) => {

    const style = {
        width: container_dimensions.width + 'vw',
        height: container_dimensions.height + 'vh'
    }

    return (
        <div style={style}>
            {map_type.includes('2D') ? <WebMap id={id} /> : <WebScene id={id} />}
        </div>
    )
}

export default WebMapView;
