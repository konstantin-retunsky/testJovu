/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReviewUpdateManyWithoutAdsInput {
  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  connect?: Array<ReviewWhereUniqueInput>;

  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  disconnect?: Array<ReviewWhereUniqueInput>;

  @Field(() => [ReviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewWhereUniqueInput],
  })
  set?: Array<ReviewWhereUniqueInput>;
}

export { ReviewUpdateManyWithoutAdsInput as ReviewUpdateManyWithoutAdsInput };
