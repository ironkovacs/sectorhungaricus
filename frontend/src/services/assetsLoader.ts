import killTeamImage from "./../assets/img/killteam.webp";
import warCryImage from './../assets/img/warcry.jpg'
import trenchCrusadeImage from "./../assets/img/trench.png";
import spearheadImage from "./../assets/img/aos.jpg"
import underConstructionImage from "./../assets/img/c6876eb1-d2eb-44b1-80c8-6b7c314183c5.webp"
import logo from "./../assets/logo.png"
import kofiQR from "./../assets/qrcode.png"
import kofiLogo from "./../assets/kofi_symbol.png"
import BoucherieBlock from "../assets/fonts/Boucherie Block.otf"
import BoucherieBlockBold from "../assets/fonts/Boucherie Block Bold.otf"

const assets = {
    kofi:{
        kofiLogo, kofiQR
    },
    logo,
    images: {
        killTeam: killTeamImage,
        warcry: warCryImage,
        trenchCrusade: trenchCrusadeImage,
        spearhead: spearheadImage,
        underConstruction: underConstructionImage
    },
    font:{
        BoucherieBlock,
        BoucherieBlockBold
    }
};

export default assets;