!(function(t){t.fn.rtResponsiveTables=function(r){var e=t.extend({containerBreakPoint:767},r);function i(r){return((rt_table_width=0),r.hasClass("rt-vertical-table")?(rt_table_width=r.outerWidth()):(r.find("th").each(function(r,e){rt_table_width+=t(this).outerWidth();}),(rt_table_width=rt_table_width)),rt_table_width);}
return((rtStartingOuterWidth=t(window).width()),(is_iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent)),(rt_responsive_table_object=this),(window.fix_responsive_tables=function(){t("table.rt-responsive-table").length&&t("table.rt-responsive-table").each(function(r){(rt_containers_width=t(this).parent().width()),(rt_current_width=i(t(this))-1),(rt_max_width=t(this).attr("data-rt-max-width")),(rt_has_class_rt_vertical_table=t(this).hasClass("rt-vertical-table")),t(this).attr("data-rtContainerBreakPoint")?(rt_user_defined_container_breakpoint=t(this).attr("data-rtContainerBreakPoint")):(rt_user_defined_container_breakpoint=e.containerBreakPoint),rt_containers_width<rt_current_width||rt_containers_width<=rt_user_defined_container_breakpoint?(t(this).addClass("rt-vertical-table"),rt_max_width>rt_current_width&&rt_max_width>rt_user_defined_container_breakpoint?t(this).attr("data-rt-max-width",rt_current_width):rt_max_width>rt_current_width&&rt_max_width<=rt_user_defined_container_breakpoint&&t(this).attr("data-rt-max-width",rt_user_defined_container_breakpoint)):rt_containers_width>rt_max_width&&rt_containers_width>rt_user_defined_container_breakpoint&&(t(this).removeClass("rt-vertical-table"),rt_max_width>rt_current_width&&!rt_has_class_rt_vertical_table&&rt_max_width>rt_user_defined_container_breakpoint&&!rt_has_class_rt_vertical_table?t(this).attr("data-rt-max-width",rt_current_width):rt_max_width>rt_current_width&&!rt_has_class_rt_vertical_table&&rt_max_width<=rt_user_defined_container_breakpoint&&!rt_has_class_rt_vertical_table&&t(this).attr("data-rt-max-width",rt_user_defined_container_breakpoint));});}),rt_responsive_table_object.each(function(r,e){t(this).addClass("rt-responsive-table-"+r).addClass("rt-responsive-table"),t(this).find("tbody > tr > td").wrapInner('<div class="responsive-container"></div>'),r==rt_responsive_table_object.length-1&&(t(window).resize(function(){(!is_iOS||(is_iOS&&rtStartingOuterWidth!==t(window).width()))&&((rtStartingOuterWidth=t(window).width()),fix_responsive_tables());}),(rt_responsive_table_count=t("table.rt-responsive-table").length),t("table.rt-responsive-table").each(function(r,e){var a;(a="table.rt-responsive-table-"+r),(rt_css_code='<style type="text/css">'),t(a).find("th").each(function(r,e){rt_css_code+=a+".rt-vertical-table td:nth-of-type("+(r+1)+'):before { content: "'+t(this).text().trim()+'"; }';}),(rt_css_code+="</style>"),t(rt_css_code).appendTo("head"),t("table.rt-responsive-table-"+r).attr("data-rt-max-width",i(t(this))),t(this).find("td,th").each(function(r,e){var i;(i=t(this)),t.trim(i.html())||t(this).html("&#160;");}),rt_responsive_table_count-1==r&&fix_responsive_tables();}));}),this);};})(jQuery);