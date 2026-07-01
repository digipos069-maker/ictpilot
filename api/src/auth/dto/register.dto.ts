import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  email!: string;

  @ApiProperty({
    description: 'The password for the account',
    example: 'SecurePass123!',
  })
  password!: string;
}
