import Picture from "../../assets/pictures/profile-picture.svg"

export function ProfilePicture() {
    return (
        <img
            src={Picture}
            alt="Foto de perfil de Luis Gustavo Grando Finger"
            className="w-35 h-35"
        />
    );
}
