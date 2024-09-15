import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";

import axios from "axios";
import { useEffect } from "react";
import ErrorCard from "../components/ErrorCard";

import "../App.css";
import Gallary from "../components/portfolio/Gallary/Gallary";
import { Wrapper } from "../components/Wrapper";
import Loading from "../components/Loading";

type Props = {};

const PortfolioSingle = (props: Props) => {
  let { albumId } = useParams();
  const [album, setAlbum] = useState<any>([]);

  const [headerImage, setHeaderImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const getAlbum = async () => {
    // setIsLoading(true);
    try {
      const singleAlbum = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/album/get_single_album/${albumId}`
      );

      setHeaderImage(singleAlbum.data.albumHeaderImg);
      const data: any = singleAlbum.data.images;

      setAlbum(data);

      return singleAlbum.data.images;
    } catch (error: any) {
      if (error.response.status === 500) {
        setLoginError("internal server error !");
      }
      console.log("album fetching error");
      return;
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // console.log("set TIme out")
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAlbum();

        return;
      } catch (error) {
        console.error("Error fetching album:", error);
        return;
      }
    };

    fetchData();
  }, );

  const [loginError, setLoginError] = useState<string>("");

  const errorCardHandler = (e: any) => {
    if (e.btn1) {
      // setLoginError("")
    }
  };

  return (
    <>
      <Wrapper>
        <HeaderSection
          imgUrl={headerImage}
          title="About Us"
          desc="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc"
          TextLogic={false}
        />
        <div className="w-full px-vw5">
          {album.length > 0 && <Gallary images={album} />}

          {loginError !== "" && (
            <ErrorCard
              fn={errorCardHandler}
              details={{
                message: "error message",
                btn1: [true, "Try Again"],
                btn2: [false, "cancel", ""],
              }}
            />
          )}
        </div>
      </Wrapper>
      {isLoading && <Loading />}
    </>
  );
};

export default PortfolioSingle;
