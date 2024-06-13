import { em } from "@mantine/core";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

import { StationType } from "../../types";

export const useStation = () => {
  const { stationId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, description, popularity, streamUrl, imgUrl } =
    location.state as StationType;
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  if (!stationId) {
    navigate("/stations");
  }

  return {
    isMobile,
    station: { name, description, popularity, streamUrl, imgUrl },
  };
};
