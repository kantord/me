all: dist/cv.html dist/cv.css

dist/_tmp.html: src/cv.md
	cmark $^ --to html > $@

dist/cv.css: src/cv.sass
	sass --scss $< | minify --mime "text/css" > $@

dist/cv.html: src/header.html dist/_tmp.html src/footer.html
	cat $^ > $@
