/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AdWhereUniqueInput } from "../../ad/base/AdWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AdCreateNestedManyWithoutCategoriesInput {
  @Field(() => [AdWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AdWhereUniqueInput],
  })
  connect?: Array<AdWhereUniqueInput>;
}

export { AdCreateNestedManyWithoutCategoriesInput as AdCreateNestedManyWithoutCategoriesInput };
