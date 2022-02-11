import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {User} from "./users/user.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Posts} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1111',
            database: 'nest-course',
            models: [User, Role, UserRoles, Posts],
            autoLoadModels: true
        }),
        ServeStaticModule.forRoot({
           rootPath: path.resolve(__dirname, 'static')
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule
    ]
})
export class AppModule {

}