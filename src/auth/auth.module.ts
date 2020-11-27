import { GoogleStrategy } from './Google-Strategy';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
 import * as config from 'config'
import { FacebookStrategy } from './Facebook-Strategy';

const jwtconfig=config.get('jwt')

@Module({
  imports:[ 
    
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
                  secret:'topSecret51',
                  signOptions:{
                    expiresIn:3600
                  }

                  }),
       TypeOrmModule.forFeature([UserRepository])

        ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,GoogleStrategy,FacebookStrategy],
  exports:[JwtStrategy,PassportModule,GoogleStrategy,FacebookStrategy]
})
export class AuthModule {}
