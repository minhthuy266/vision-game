import Image from "next/image";
import Link from "next/link";
import SpeakerIcon from "public/assets/icons/SpeakerIcon";
import {
  FeaturedNewsContainer,
  StyledBodyFeaturedNewsList,
  StyledFeaturedNewsItemDate,
  StyledFeaturedNewsItemTitle,
  StyledHeader,
} from "./styles";

const FeaturedNewsComp = ({ mostViewNews }) => {
  console.log("object", mostViewNews);

  return (
    <FeaturedNewsContainer>
      <StyledHeader style={{ marginBottom: "0" }}>
        <SpeakerIcon /> Tin tức xem nhiều nhất
      </StyledHeader>

      {mostViewNews?.news_details?.slice(0, 5).map((el) => {
        return (
          <Link href={`/news/${el._id}`} key={el._id}>
            <StyledBodyFeaturedNewsList>
              <div>
                <Image
                  src={
                    el.image === null
                      ? "https://picsum.photos/seed/picsum/200/300"
                      : el.image
                  }
                  alt="Featured News"
                  width={100}
                  height={100}
                />
              </div>

              <StyledFeaturedNewsItemDate>
                {el.publish_date}
              </StyledFeaturedNewsItemDate>

              <StyledFeaturedNewsItemTitle>
                {el.title}
              </StyledFeaturedNewsItemTitle>
            </StyledBodyFeaturedNewsList>
          </Link>
        );
      })}
    </FeaturedNewsContainer>
  );
};

export default FeaturedNewsComp;
