import { postProfile } from "../../../../services/userAccount";
import { useContext, useState } from "react";
import styled from "styled-components";
import SmallLoad from "../../../../components/SmallLoad";
import { AuthContext } from "../../../../hooks/Authentication/AuthContext";

const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.3rem;
    font-family: 'Nunito Sans', sans-serif;
    padding: 2.3rem 1.8rem;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
`;

const SettingsContent = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--secondary-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProfileOptions = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2,1fr);
    gap: .5rem;

    @media screen and (min-width: 350px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media screen and (min-width: 825px) {
        display: flex;
        flex-direction: row;
    }
`;

const ProfileImg = styled.img`
    width: 5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const profileImages = ["men1", "men2", "men3", "woman1", "woman2", "woman3"];

function SettingsSections() {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const changeProfileImage = async (image) => {
        const userId = user.id;

        if (!userId) {
            return;
        }

        setLoading(true);

        try {
            await postProfile(userId, { profile: image });
            window.location.reload();
        } catch (error) {
            console.log("Error changing profile image:");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SettingsContainer>
            <Title>General Settings</Title>

            <SettingsContent>
                <p>Choose your profile icon</p>

                <ProfileOptions>
                    {loading ? (
                        <SmallLoad />
                    ) : (
                        profileImages.map((image) => (
                            <ProfileImg 
                                key={image} 
                                src={`/profile/${image}.png`} 
                                alt={`Profile ${image}`} 
                                onClick={() => changeProfileImage(image)}
                            />
                        ))
                    )}
                </ProfileOptions>
            </SettingsContent>
        </SettingsContainer>
    );
}

export default SettingsSections;