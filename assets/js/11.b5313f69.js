(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(a,e,r){"use strict";r.r(e);var t=r(43),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"springboot-mysql模板多数据源加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springboot-mysql模板多数据源加载"}},[a._v("#")]),a._v(" SpringBoot-Mysql模板多数据源加载")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://search.maven.org/search?q=g:com.purgeteam%20AND%20a:mysql-datasource-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/maven-central/v/com.purgeteam/mysql-datasource-spring-boot-starter.svg?label=Maven%20Central",alt:"Maven Central"}}),r("OutboundLink")],1),a._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/SpringBoot-2.1.8.RELEASE-green.svg",alt:"License"}}),a._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/JAVA-1.8+-green.svg",alt:"License"}}),a._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/maven-3.0+-green.svg",alt:"License"}}),a._v(" "),r("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"}}),r("OutboundLink")],1)]),a._v(" "),r("blockquote",[r("p",[a._v("qq交流群: "),r("code",[a._v("812321371")]),a._v("\n微信交流群: "),r("code",[a._v("MercyYao")])])]),a._v(" "),r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),r("p",[a._v("在 java 项目里常用到 mysql 多数据源操作。结合 springboot 使用原有的还是很方便的。\n不过需要配置多套数据源的配置。")]),a._v(" "),r("p",[a._v("在微服务里, 数据库连接之类的配置是单独拆开读取。相当于一个模板。")]),a._v(" "),r("p",[a._v("如下mysql:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("spring.datasource.driver-class-name=com.mysql.jdbc.Driver\nspring.datasource.url=jdbc:mysql://127.0.0.1:3306/${config.mysql.name}?useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&autoReconnect=true\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.type=com.alibaba.druid.pool.DruidDataSource\nspring.datasource.driverClassName=com.mysql.jdbc.Driver\n")])])]),r("p",[r("code",[a._v("redis")]),a._v(" "),r("code",[a._v("rabbitmq")]),a._v(" "),r("code",[a._v("mongodb")]),a._v(" 等等中间件连接配置通过单独配置分开,以便后续方便修改ip等连接信息。")]),a._v(" "),r("p",[a._v("当然 "),r("code",[a._v("springboot")]),a._v(" 在注入多数据源时要读取相应前缀的数据配置。")]),a._v(" "),r("p",[r("strong",[a._v("代码:")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('@Bean\n@ConfigurationProperties(prefix = "spring.datasource.onemysql")\npublic DataSource originalDataSource(DataSourceFactory dataSourceFactory) {\n    return DataSourceBuilder.create().build();\n}\n')])])]),r("p",[r("strong",[a._v("配置:")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("spring.datasource.onemysql.driver-class-name=com.mysql.jdbc.Driver\nspring.datasource.onemysql.url=jdbc:mysql://127.0.0.1:3306/${config.mysql.name}?useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&autoReconnect=true\nspring.datasource.onemysql.username=root\nspring.datasource.onemysql.password=root\nspring.datasource.onemysql.type=com.alibaba.druid.pool.DruidDataSource\nspring.datasource.onemysql.driverClassName=com.mysql.jdbc.Driver\n")])])]),r("p",[a._v("上面方式加载以 onemysql 开始的数据源配置。如果是多个的话，相应配置多个bean和配置文件。")]),a._v(" "),r("p",[a._v("根据上述方式, 我们可以使用一个mysql模板, 通过一定方式去加载创建对应的数据源。微服务下只需要维护一个mysql配置模板。")]),a._v(" "),r("h2",{attrs:{id:"功能使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能使用"}},[a._v("#")]),a._v(" 功能使用")]),a._v(" "),r("h3",{attrs:{id:"添加依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[a._v("#")]),a._v(" 添加依赖")]),a._v(" "),r("p",[r("strong",[a._v("ps:")]),a._v(" 实际version版本请使用最新版\n"),r("strong",[a._v("最新版本:")]),a._v(" "),r("a",{attrs:{href:"https://search.maven.org/search?q=g:com.purgeteam%20AND%20a:mysql-datasource-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/maven-central/v/com.purgeteam/mysql-datasource-spring-boot-starter.svg?label=Maven%20Central",alt:"Maven Central"}}),r("OutboundLink")],1)]),a._v(" "),r("p",[r("a",{attrs:{href:"https://search.maven.org/search?q=g:com.purgeteam%20AND%20a:mysql-datasource-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击查看最新新版本"),r("OutboundLink")],1)]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("<dependency>\n  <groupId>com.purgeteam</groupId>\n  <artifactId>mysql-datasource-spring-boot-starter</artifactId>\n  <version>0.1.0.RELEASE</version>\n</dependency>\n")])])]),r("h3",{attrs:{id:"_1-配置模板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置模板"}},[a._v("#")]),a._v(" 1 配置模板")]),a._v(" "),r("p",[a._v("我们先按照原有的方式配置mysql数据源配置。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("config.mysql.name=user\nconfig.mysql.hosturl=127.0.0.1:3306\n\n# mysql\nspring.datasource.driver-class-name=com.mysql.jdbc.Driver\nspring.datasource.url=jdbc:mysql://${config.mysql.hosturl}/${config.mysql.name}?useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&autoReconnect=true\nspring.datasource.jdbc-url=${spring.datasource.url}\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.type=com.alibaba.druid.pool.DruidDataSource\nspring.datasource.driverClassName=com.mysql.jdbc.Driver\nspring.datasource.filters=stat\nspring.datasource.maxActive=20\nspring.datasource.initialSize=1\nspring.datasource.maxWait=60000\nspring.datasource.minIdle=1\nspring.datasource.timeBetweenEvictionRunsMillis=60000\nspring.datasource.minEvictableIdleTimeMillis=300000\nspring.datasource.validationQuery=select 'x'\nspring.datasource.testWhileIdle=true\nspring.datasource.testOnBorrow=false\nspring.datasource.testOnReturn=false\nspring.datasource.poolPreparedStatements=true\nspring.datasource.maxOpenPreparedStatements=20\n")])])]),r("p",[r("code",[a._v("config.mysql.name")]),a._v(" 为数据库名称, 为下面代码注入做准备。")]),a._v(" "),r("h3",{attrs:{id:"_2-数据库名结合模板配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库名结合模板配置"}},[a._v("#")]),a._v(" 2 数据库名结合模板配置")]),a._v(" "),r("p",[a._v("通过 "),r("code",[a._v("DataSourceFactory#createDataSource")]),a._v(" 方法可以将指定数据库注入。模板配置为之前的配置, 数据库名称通过 "),r("code",[a._v("${config.mysql.name}")]),a._v(" 进行替换。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('/**\n * 数据库名称替换方式生成 {@link DataSource}\n * @author purgeyao\n * @since 1.0\n */\n@Configuration\npublic class OneDataSourceConfiguration {\n\n    ...\n\n    /**\n     * DataSourceFactory#createDataSource 方式加载 one_mysql 数据库\n     * @param dataSourceFactory dataSourceFactory\n     * @return {@link DataSource}\n     */\n    @Primary\n    @Bean\n    public DataSource oneDataSource(DataSourceFactory dataSourceFactory) {\n        return dataSourceFactory.createDataSource("one_mysql");\n    }\n\n}\n')])])]),r("p",[a._v("这样可以把名为 "),r("code",[a._v("one_mysql")]),a._v(" 数据库数据源进行加载。")]),a._v(" "),r("h3",{attrs:{id:"_2-数据库信息结合配置模板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库信息结合配置模板"}},[a._v("#")]),a._v(" 2 数据库信息结合配置模板")]),a._v(" "),r("p",[a._v("当然只有上面方式只适合数据库地址密码一致的情况下,库名不一致,注入多数据源。")]),a._v(" "),r("p",[a._v("下面方式支持数据库信息不一致情况下使用模板注入多数据源。")]),a._v(" "),r("p",[a._v("需要先配置 mysql (1 配置模板),另行加下下面配置。")]),a._v(" "),r("p",[r("strong",[a._v("配置:")])]),a._v(" "),r("p",[r("code",[a._v("config.datasource.mysql.source-info-map")]),a._v(" 包含 4 个信息 "),r("code",[a._v("host-url数据库地址")]),a._v(" 、 "),r("code",[a._v("name数据库名称")]),a._v("、"),r("code",[a._v("username数据库用户名")]),a._v("、 "),r("code",[a._v("password数据库密码")]),a._v("。")]),a._v(" "),r("p",[r("code",[a._v("config.datasource.mysql.source-info-map.tow_mysql")]),a._v(" 里的 "),r("code",[a._v("tow_mysql")]),a._v(" 为 map 集合的 key。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("# mysql-datasource-spring-boot-starter\nconfig.datasource.mysql.source-info-map.tow_mysql.host-url=127.0.0.1:3306\nconfig.datasource.mysql.source-info-map.tow_mysql.name=tow_mysql\nconfig.datasource.mysql.source-info-map.tow_mysql.username=root\nconfig.datasource.mysql.source-info-map.tow_mysql.password=root\n")])])]),r("p",[r("strong",[a._v("代码:")])]),a._v(" "),r("p",[a._v("先在 "),r("code",[a._v("DataSourceConfigProperties")]),a._v(" 对象里获取相应 "),r("code",[a._v("SourceInfoMap")]),a._v(" 配置。")]),a._v(" "),r("p",[a._v("将 "),r("code",[a._v("DataSourceConfigProperties.SourceInfo towMysq")]),a._v(" 配置通过 "),r("code",[a._v("DataSourceFactory#createDataSource")]),a._v(" 方法进行创建即可。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('/**\n * {@link DataSourceConfigProperties} 配置方式生成 {@link DataSource}\n *\n * @author purgeyao\n * @since 1.0\n */\n@Configuration\npublic class TowDataSourceConfiguration {\n\n    /**\n     * DataSourceFactory#createDataSource 方式加载 tow_mysql 数据库\n     *\n     * @param dataSourceFactory dataSourceFactory\n     * @return {@link DataSource}\n     */\n    @Bean\n    public DataSource towDataSource(DataSourceFactory dataSourceFactory, DataSourceConfigProperties properties) {\n        DataSourceConfigProperties.SourceInfo towMysql = properties.getSourceInfoMap().get("tow_mysql");\n        if (towMysql == null) {\n            throw new IllegalArgumentException("未获取到相应配置");\n        }\n        return dataSourceFactory.createDataSource(towMysql);\n    }\n\n}\n')])])]),r("h3",{attrs:{id:"_4-注解选择器结合模板配置-推荐写法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-注解选择器结合模板配置-推荐写法"}},[a._v("#")]),a._v(" 4 注解选择器结合模板配置(推荐写法)")]),a._v(" "),r("p",[r("code",[a._v("@DataSourceSelector")]),a._v(" 注解可以使用配置模板生成相应数据源对象。")]),a._v(" "),r("p",[r("code",[a._v("DataSourceSelector#value")]),a._v(" 为数据库配置key(详情2的配置), 其他写法和原有的数据库创建方法一致。")]),a._v(" "),r("p",[a._v("只是把原有的 "),r("code",[a._v('@ConfigurationProperties(prefix = "spring.datasource.onemysql")')]),a._v(" 替换为 "),r("code",[a._v('@DataSourceSelector("tow_mysql")')])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('/**\n * 注解方式注入 {@link DataSource}\n *\n * @author purgeyao\n * @since 1.0\n */\n@Configuration\npublic class AnnotationsDataSourceConfiguration {\n\n    ...\n\n    /**\n     * {@link DataSourceSelector} 方式选择注入 {@link DataSource}\n     *\n     * @return {@link DataSource}\n     */\n    @DataSourceSelector("tow_mysql")\n    public DataSource selectorDataSource() {\n        return DataSourceBuilder.create().build();\n    }\n}\n')])])]),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),r("p",[r("code",[a._v('@DataSourceSelector("tow_mysql")')]),a._v(" 方式推荐使用。和之前的方法基本无差别, 简单方便点。")]),a._v(" "),r("p",[a._v("mysql 配置文件分开之后方便之后多个服务使用。")]),a._v(" "),r("blockquote",[r("p",[a._v("qq交流群: "),r("code",[a._v("812321371")]),a._v("\n微信交流群: "),r("code",[a._v("MercyYao")])])]),a._v(" "),r("blockquote",[r("p",[a._v("示例代码地址:"),r("a",{attrs:{href:"https://github.com/purgeteam/data-source-spring-boot",target:"_blank",rel:"noopener noreferrer"}},[a._v("data-source-spring-boot"),r("OutboundLink")],1)])]),a._v(" "),r("blockquote",[r("p",[a._v("作者GitHub:\n"),r("a",{attrs:{href:"https://github.com/purgeyao",target:"_blank",rel:"noopener noreferrer"}},[a._v("Purgeyao"),r("OutboundLink")],1),a._v(" 欢迎关注")])])])}),[],!1,null,null,null);e.default=s.exports}}]);