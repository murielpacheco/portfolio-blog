import { render } from "@testing-library/react";
import { PostSection } from ".";
import { PostItem } from "../PostItem";

test("Click should send users to /posts", () => {
   const { debug } = render(
      <PostSection postsItem={[]}>
         <PostItem title={""} release_year={""} subject={""} excerpt={""}/>
      </PostSection>
   )

   debug()
})