import React from 'react'

interface IconProps{
    name:String;
}

const BoxIcon: React.FC<IconProps> = (props) =>{
    return(
        <div>
            <i ></i>
            <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
        </div>
    )
}

export default BoxIcon;