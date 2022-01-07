var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass')(require('sass')); //Подключаем Sass пакет
        browserSync = require('browser-sync'); // Подключаем Browser Sync
	 
	gulp.task('sass', function(){ // Создаем таск "sass"
		return gulp.src('app/sass/**/*.sass') // Берем источник
			.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
			.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
			.pipe(browserSync.reload({stream: true}))
	});

    gulp.task('browser-sync', function() { // Создаем таск browser-sync
		browserSync({ // Выполняем browser Sync
			server: { // Определяем параметры сервера
				baseDir: 'app' // Директория для сервера - app
			},
			notify: false // Отключаем уведомления
		});
	});

    gulp.task('watch', function() {
		gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
		gulp.watch('app/*.html', browserSync.reload); 
		gulp.watch('app/js/**/*.js', browserSync.reload); 
	});
	gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
		