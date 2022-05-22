import { Controller, Body, HttpException, Get, HttpStatus, Param, Put } from "@nestjs/common";
import { UpdateMemberDto } from "./dto";
import { MemberService } from "./member.service";

@Controller("members")
export class MemberController {
  constructor(private readonly memberService: MemberService) {}
  @Put(":memberAddress")
  async put(
    @Param("memberAddress") memberAddress: string,
    @Body() updateData: UpdateMemberDto
  ): Promise<any> {
    return await this.memberService.update(memberAddress, updateData);
  }

  @Get(":memberAddress")
  async getOne(@Param("memberAddress") memberAddress): Promise<any> {
    const group = await this.memberService.findOne({ address: memberAddress });
    if (!group)
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: "Club not found" },
        HttpStatus.NOT_FOUND
      );
    return group;
  }
}
