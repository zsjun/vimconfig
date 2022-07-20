"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const helmet = require("helmet");
const swagger_1 = require("@nestjs/swagger");
const transform_interceptor_1 = require("./interceptors/transform.interceptor");
const http_exception_filter_1 = require("./filters/http-exception.filter");
const app_module_1 = require("./app.module");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('/api');
    app.use(rateLimit({
        windowMs: 60 * 1000,
        max: 1000,
    }));
    app.use(compression());
    app.use(helmet());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Wipi Open Api')
        .setDescription('Wipi Open Api Document')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map