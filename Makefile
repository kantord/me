CV_DIR = cv
CV_SRC = $(CV_DIR)/_tmp.html
CV_CSS = $(CV_DIR)/cv.css
CV_INLINE_CSS = $(CV_DIR)/_inline_css.html
CV_HTML = $(CV_DIR)/index.html
CV_PDF = $(CV_DIR)/cv_daniel_kantor_developer.pdf

.PHONY: all clean

all: $(CV_PDF)

$(CV_INLINE_CSS): $(CV_CSS)
	printf '<style>' > $@
	cat $< >> $@
	printf '</style>' >> $@

$(CV_HTML): $(CV_SRC) $(CV_INLINE_CSS)
	printf '<html>\n\n    <head>\n        <meta charset="UTF-8">\n        <title>Dániel Kántor, Developer - CV</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n    </head>\n\n' > $@
	cat $(CV_SRC) >> $@
	cat $(CV_INLINE_CSS) >> $@
	printf '\n</html>\n' >> $@

$(CV_PDF): $(CV_HTML)
	weasyprint $< $@

clean:
	rm -f $(CV_INLINE_CSS) $(CV_HTML) $(CV_PDF)
