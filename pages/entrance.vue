<template>
	<div id="container">
		<hr />

		<div id="contents" class="div_FullMaster_Contents">
			<div id="lnbWrap">
				<div id="lnbArea">
					<!-- 본문 왼쪽영역 HTML contents 시작 -->
					<div class="htit">
						<h2>입시정보</h2>
					</div>
					<ul class="lnb">
						<li class="noSub"><a href="/EntranceCourse/EntranceInfo/frm_EntranceInfo_List.aspx?MenuCode=220100">입시분석</a></li>
						<li class="on">
							<a href="/EntranceCourse/CollegeStrategy/frm_FullService.aspx?menucode=220900" style="color: #222 !important">풀서비스</a>
							<ul id="block1" class="dth2">
								<li><a href="/MyStudy/FullService/frm_FullService_Home.aspx?Grade=12&amp;menucode=220900">[고3] 수능/모평/학평</a></li>
								<li><a href="/MyStudy/FullService/frm_FullService_Home.aspx?Grade=11&amp;menucode=220900">[고2] 학력평가</a></li>
								<li><a href="/MyStudy/FullService/frm_FullService_Home.aspx?Grade=10&amp;menucode=220900">[고1] 학력평가</a></li>
							</ul>
						</li>
						<li class="noSub"><a href="/MyStudy/UnivSelfTest/frm_UnivSelfTest_Home.aspx?MenuCode=221000">대학합격진단서비스</a></li>
						<li class="noSub"><a href="/EntranceCourse/Edugo/frm_EduGoIntro.aspx?menucode=221100">에듀고</a></li>
						<li class="noSub"><a href="/University/frm_University_MapSearch_List.aspx?MenuCode=220200">대학별 모집요강</a></li>
						<li>
							<a href="/DreamSchool/SelfStudy/frm_SelfStudy_Test.aspx?Menucode=220300">진단검사</a>
							<ul id="block2" class="dth2">
								<li><a href="/Event/20160422_chck/frm_Event_20160422_Intellect.aspx?Menucode=220310">미래형 진로적성검사</a></li>
								<li><a href="/DreamSchool/SelfStudy/frm_SelfStudy_Jindan.aspx?Menucode=220320">학습 몰입 유형 검사</a></li>
								<li><a href="/Parent/Main/frm_Parent_TestZone.aspx?MenuCode=220330">학습 관여 유형 검사</a></li>
							</ul>
						</li>
						<li class="noSub"><a href="/Entrance/WayInfo/frm_TED_List.aspx?MenuCode=220410">독서활동</a></li>
						<li>
							<a href="/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220530&amp;Type=ThisDepartment">진로진학정보</a>
							<ul id="block3" class="dth2">
								<li><a href="/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220530&amp;Type=ThisDepartment">학과정보</a></li>
								<li><a href="/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220540&amp;Type=Job">직업정보</a></li>
							</ul>
						</li>
						<li>
							<a href="/DalJa/Mento/frm_Mento_Main.aspx?MenuCode=220600">SKY 멘토 비법</a>
							<ul id="block4" class="dth2">
								<li><a href="/DalJa/Mento/Intro/MentoIntroduce_Common.aspx?MenuCode=220610">멘토소개</a></li>
								<li><a href="/DalJa/Mento/HowTo/frm_Mento_HowtoList.aspx?MenuCode=220620">멘토 칼럼</a></li>
								<li><a href="/Dalja/Mento/BBS/frm_BBS_List.aspx?MenuCode=220630">상담게시판</a></li>
							</ul>
						</li>
						<li class="noSub"><a class="noSub" href="/DreamSchool/frm_course_high_info_sub_examlive.aspx?MenuCode=220800">Live 입시상담</a></li>
					</ul>

					<!-- 강좌찾기도우미 -->
					<div id="cph_LeftMenu_ucl_Left_ucl_Banner1_dvLessonSearchGuide" class="classSchGuide" style="display: none">
						<div class="htit">
							<h2>강좌찾기도우미</h2>
						</div>
						<ul>
							<li><a href="/Lesson/BridgeNew/20210112_activity/frm_Bridge_activity_210112.aspx?MenuCode=020940">액티비티 강좌</a></li>
							<li><a href="/Lesson/Appraisal/frm_Appraisal_List.aspx?MenuCode=020910">수강생 강좌평</a></li>
							<li><a href="javascript:void(0);" onclick="gf_Popup_Open('/popup/lesson/Coursemap/pop_CourseIntro.aspx', 'Popupintro', '1120px', '680px', 'no', '10', '10', 'Popupintro');">강좌 한눈에 보기</a></li>
							<li><a href="/lesson/sample/frm_lesson_sample_list.aspx?strSubjectCode=G01&amp;strSpecialCode=&amp;strGradeCode=&amp;strDetail_Idx=&amp;strPublisher_Code=&amp;MenuCode=020920">전체 강좌맛보기</a></li>
							<li><a href="/Lesson/Pds/frm_Pds_List.aspx?MenuCode=020930">학습자료실</a></li>
						</ul>
					</div>
					<!-- //강좌찾기도우미 -->
					<!-- //test zone/ 학습자료실 -->
					<div class="lnbSmenu" style="display: none">
						<a href="/Lesson/LessonGuide/CheckCenter_Guide.aspx?MenuCode=Check_1"><img src="//high.milkt.co.kr/img_new/common/btn_lnb_testzone.gif" alt="testzone" /></a>
						<a href="/Lesson/Pds/frm_Pds_List.aspx?MenuCode=220910&amp;Grade="><img src="//high.milkt.co.kr/img_new/common/btn_lnb_studydata.gif" alt="학습자료실" /></a>
					</div>
					<!-- //test zone/ 학습자료실 -->

					<div id="cph_LeftMenu_ucl_Left_ucl_Banner1_dvLnbCustomer" style="display: none">
						<!-- 고객센터// -->
						<div class="lnbCustomer">
							<h2>
								고객센터<span class="tell">1522-5533</span>
								<a href="javascript:;" onclick="gf_Popup_Open('/Popup/winpop_ars_info.html', 'winpop_ars_info', '640px', '730px', 'no', '10', '10', 'Popupintro');" class="bntArsIfo">ARS 번호안내</a>
							</h2>
							<dl class="list">
								<dd>
									<strong>평<em class="space"></em>일</strong>10:00~22:00
								</dd>
								<dd>
									<strong>토<em class="space w2"></em>요<em class="space w2"></em>일</strong>10:00~20:00
								</dd>
								<dd>
									<strong>점<em class="space"></em>심</strong>12:00~13:00
								</dd>
								<dd>
									<strong>휴<em class="space"></em>무</strong>일요일/공휴일
								</dd>
								<dd class="etc"><em>24시간 ARS결제</em> <span class="tell">1661-6584</span></dd>
							</dl>
						</div>
						<div class="supportGuide">
							<ul>
								<li><a href="/support/frm_support1.aspx?Faq_SubType=F01&amp;menucode=070200">자주하는 질문</a></li>
								<li><a href="/support/frm_support_Remote.aspx?MenuCode=070700">원격지원</a></li>
							</ul>
						</div>
					</div>
					<!-- //고객센터 -->

					<!-- 본문 왼쪽영역 HTML contents 끝 -->

					<!-- <script type="text/javascript">

    /* Layer popup 내 탭 스크립트 */
    $(document).ready(function() {
        // tab
        $('.tabGroup [class*=Nav] li a').on('click',function(){
            var idx = $(this).parent().index();
            var tabContWrap = $(this).parent().parent().parent().next('.tabContWrap');
            $(this).parents('ul').find('li').removeClass('active');
            $(this).parent().addClass('active');
            tabContWrap.find('[class^=tabCont]').hide();
            tabContWrap.find('[class^=tabCont]').eq(idx).show();
            $('.tabTypeB li:first-child a').trigger('click');
            return false;
        });

        var tabLect = ('.tabGroup .tabTypeB li');
        var cntLect = ('.tabGroup [class^=tabCont]');
        $(cntLect).find('.cont01').show();
        $(tabLect).find('a').click(function (){
            var idx = $(this).parent('li').index();
            $(cntLect).find('.cont0' + (idx + 1)).show().siblings('[class^="cont0"]').hide().end().find('[class^="tabType"] li:first-child').find('a').trigger('click');
            return false;
        });

        var tabType = ('.tabGroup .tabContWrap [class^="tabType"] li');
        $(tabType).find('a').click(function (){
            $(this).parent('li').addClass('on').siblings().removeClass('on');
            $('.thScroll').animate({scrollTop:0},'0'); /* 2022-12-29 수정 */
            return false;
        });

        $('.popHigh369 .btnClose').click(function (){
            var $pop = $(this).closest('.popHigh369');
            $pop.css({display:'block',visiblity:'hidden'});
            $pop.find('.bodyCont')[0].scrollTop = 0;
            $pop.css({display:'',visiblity:''});
            $pop.find('.tabGroup a').eq(0).click();
            $pop.find('.tabGroup .tabContWrap [class^="tabType"] a').eq(0).click();
        });
    });

    function mf_Early_Test_On() {  //수시, 시험일정 탭
        $('#early').addClass('active');
        $('#regualr').removeClass('active');
        $('#early_tabCont01').show();
        $('#regualr_tabCont02').hide();

        $('#range').removeClass('active');
        $('#test_Calendar').addClass('active');
        $('#test_Calendar_tabCont01').show();
        $('#range_tabCont02').hide();

    }

    function mf_Regualr_Range_On() {    //정시, 출제범위 탭

        $('#early').removeClass('active');
        $('#regualr').addClass('active');
        $('#early_tabCont01').hide();
        $('#regualr_tabCont02').show();

        $('#range').addClass('active');
        $('#test_Calendar').removeClass('active');
        $('#test_Calendar_tabCont01').hide();
        $('#range_tabCont02').show();
    }

</script> -->
					<!-- Layer popup - 2023학년도 대학 입시 전형 일정 -->
					<!-- 입시 일정 -->
					<div class="firstClassLnb v2">
						<div class="ftit">
							<h2 class="calendar">24학년도 입시 일정</h2>
						</div>
						<ul>
							<li class="sat01">
								<a href="#" onclick="openLayer('.popEntSchd');mf_Early_Test_On(); return false;">수시</a>
							</li>
							<li class="sat02">
								<a href="#" onclick="openLayer('.popEntSchd');mf_Regualr_Range_On(); return false;">정시</a>
							</li>
						</ul>
					</div>
					<!-- // 입시 일정 -->

					<!-- 시험 일정 및 출제 범위 -->
					<div class="firstClassLnb v2">
						<div class="ftit"><h2 class="calendar">23년 시험 일정 및 출제 범위</h2></div>
						<ul>
							<li class="test01" onclick="openLayer('.popTestSchd');mf_Early_Test_On(); return false;"><a href="#">시험 일정</a></li>
							<li class="test02" onclick="openLayer('.popTestSchd');mf_Regualr_Range_On(); return false;"><a href="#">출제 범위</a></li>
						</ul>
					</div>
					<!-- // 시험 일정 및 출제 범위 -->

					<div class="popupWrap popHigh369 popEntSchd" style="display: none">
						<div class="layerPop">
							<div class="header"><h2>2024학년도 대학입학전형일정</h2></div>
							<div class="bodyCont">
								<div class="tblList">
									<table class="line2">
										<colgroup>
											<col width="22%" />
											<col width="28%" />
											<col width="22%" />
											<col width="28%" />
										</colgroup>
										<tbody>
											<tr>
												<th scope="row" class="t1">수능 시험일</th>
												<td>2023. 11. 16(목)</td>
												<th scope="row" class="t1">수능성적 통지일</th>
												<td>2023. 12. 8(금)</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="tabGroup mt20">
									<div class="tabMainNav">
										<ul>
											<li class="active" id="early"><a href="javascript:;">수시모집</a></li>
											<li id="regualr"><a href="javascript:;">정시모집</a></li>
										</ul>
									</div>
									<div class="tabContWrap mtSMd">
										<div class="tabCont01" id="early_tabCont01">
											<h3 class="ltit mt30">수시모집</h3>

											<div class="tblList tblList2">
												<table cellspacing="0" cellpadding="0">
													<colgroup>
														<col width="22%" />
														<col width="*" />
													</colgroup>
													<tbody>
														<tr>
															<th scope="row" class="t2">원서접수기간</th>
															<td class="txt2">2023. 9. 11(월) ~ 15(금) 중 3일 이상</td>
														</tr>
														<tr>
															<th scope="row" class="t2">전형기간</th>
															<td class="txt2">2023. 9. 16(토) ~ 12. 14(목)(90일)</td>
														</tr>
														<tr>
															<th scope="row" class="t2">합격자 발표</th>
															<td class="txt2">2023. 12. 15(금)까지</td>
														</tr>
														<tr>
															<th scope="row" class="t2">등록기간</th>
															<td class="txt2">2023. 12. 18(월) ~ 21(목)(4일)</td>
														</tr>
														<tr>
															<th scope="row" class="t2">수시 미등록 충원<br />합격통보 마감</th>
															<td class="txt2">
																2023. 12. 28(목) (합격자 발표 18시까지)<br />
																※ 홈페이지 발표는 14시까지, 14 ~ 18시까지는 개별 통보만 가능함
															</td>
														</tr>
														<tr>
															<th scope="row" class="t2">
																수시 미등록 충원<br />
																등록 마감
															</th>
															<td class="txt2">2023. 12. 29(금)</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div class="tabCont02" id="regualr_tabCont02" style="display: none">
											<h3 class="ltit mt30">정시모집</h3>
											<div class="tblList tblList2">
												<table cellspacing="0" cellpadding="0">
													<colgroup>
														<col width="15%" />
														<col width="15%" />
														<col width="*" />
													</colgroup>
													<tbody>
														<tr>
															<th scope="row" class="t2" colspan="2">원서접수기간</th>
															<td class="txt2">2024. 1. 3(수) ~ 6(토) 중 3일 이상</td>
														</tr>
														<tr>
															<th scope="row" class="t2" rowspan="3">전형기간</th>
															<th scope="row" class="t2">가군</th>
															<td class="txt2">2024. 1. 9(화) ~ 16(화)(8일)</td>
														</tr>
														<tr>
															<th scope="row" class="t2">나군</th>
															<td class="txt2">2024. 1. 17(수) ~ 24(수)(8일)</td>
														</tr>
														<tr>
															<th scope="row" class="t2">다군</th>
															<td class="txt2">2024. 1. 25(목) ~ 2. 1(목)(8일)</td>
														</tr>

														<tr>
															<th scope="row" class="t2" colspan="2">합격자 발표</th>
															<td class="txt2">2024. 2. 6(화)까지</td>
														</tr>
														<tr>
															<th scope="row" class="t2" colspan="2">등록기간</th>
															<td class="txt2">2024. 2. 7(수) ~ 13(화)(7일)</td>
														</tr>
														<tr>
															<th scope="row" class="t2" colspan="2">
																정시 미등록 충원<br />
																합격통보 마감
															</th>
															<td class="txt2">
																2024. 2. 20(화) (합격자 발표 18시까지)<br />
																※ 홈페이지 발표는 14시까지, 14 ~ 18시까지는 개별 통보만 가능함
															</td>
														</tr>
														<tr>
															<th scope="row" class="t2" colspan="2">
																정시 미등록 충원<br />
																등록 마감
															</th>
															<td class="txt2">2024. 2. 21(수)</td>
														</tr>
													</tbody>
												</table>
											</div>
											<h3 class="ltit mt30">추가모집</h3>
											<div class="tblList tblList2">
												<table cellspacing="0" cellpadding="0">
													<colgroup>
														<col width="30%" />
														<col width="*" />
													</colgroup>
													<tbody>
														<tr>
															<th scope="row" class="t2">원서접수/전형일/합격자 발표</th>
															<td class="txt2">
																2024. 2. 22(목) ~ 29(목)<br />
																※ 합격통보마감: 2024. 2. 29(목) 18:00까지<br />
																※ 홈페이지 발표는 14시까지, 14 ~ 18시까지는 개별 통보만 가능함
															</td>
														</tr>
														<tr>
															<th scope="row" class="t2">등록 마감</th>
															<td class="txt2">2024. 2. 29(목)</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a href="javascript:;" class="btnClose" onclick="closeLayer('.popEntSchd')"><span>닫기</span></a>
						</div>
						<div class="dim"></div>
					</div>
					<!-- //Layer popup - 2023학년도 대학 입시 전형 일정 -->

					<!-- Layer popup - 2022년 시험 일정 및 출제 범위 -->
					<div class="popupWrap popHigh369 popTestSchd" style="display: none">
						<div class="layerPop">
							<div class="header"><h2 class="txtDark">2023년 학평·모평·수능 시험 일정 및 출제 범위</h2></div>
							<div class="bodyCont">
								<div class="tabGroup">
									<div class="tabMainNav01">
										<ul>
											<li class="active" id="test_Calendar"><a href="javascript:;">시험 일정</a></li>
											<li id="range"><a href="javascript:;">출제 범위</a></li>
										</ul>
									</div>

									<div class="tabContWrap mtSMd">
										<div class="tabCont01" id="test_Calendar_tabCont01">
											<div class="cont01">
												<div class="tblList line">
													<table>
														<colgroup>
															<col />
															<col width="13%" />
															<col width="31%" />
															<col width="13%" />
															<col width="31%" />
														</colgroup>
														<thead>
															<tr>
																<th rowspan="2">　</th>
																<th colspan="4" class="bleft">학년별 시행 일정/주관교육청</th>
															</tr>
															<tr>
																<th colspan="2" class="bleft">1· 2학년</th>
																<th colspan="2" class="bleft">3학년</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<p>3월</p>
																</td>
																<td>
																	<p>23(목)</p>
																</td>
																<td>
																	<p>서울특별시교육청</p>
																</td>
																<td>
																	<p>23(목)</p>
																</td>
																<td>
																	<p>서울특별시교육청</p>
																</td>
															</tr>

															<tr>
																<td>
																	<p>5월</p>
																</td>
																<td colspan="2">
																	<p>　</p>
																</td>
																<td>
																	<p>10(수)</p>
																</td>
																<td>
																	<p>경기도교육청</p>
																</td>
															</tr>
															<tr>
																<td>
																	<p>6월</p>
																</td>
																<td>
																	<p>1(목)</p>
																</td>
																<td>
																	부산광역시교육청<br />
																	<p class="txtBlue">(서울 미실시)</p>
																</td>
																<td>
																	<p>1(목)</p>
																</td>
																<td>대학수학능력시험 모의평가</td>
															</tr>

															<tr>
																<td>
																	<p>7월</p>
																</td>
																<td colspan="2">
																	<p>　</p>
																</td>
																<td>
																	<p>11(화)</p>
																</td>
																<td>
																	<p>인천광역시교육청</p>
																</td>
															</tr>
															<tr>
																<td>
																	<p>9월</p>
																</td>
																<td>
																	<p>6(수)</p>
																</td>
																<td>
																	<p>인천광역시교육청</p>
																</td>
																<td>
																	<p>6(수)</p>
																</td>
																<td>대학수학능력시험 모의평가</td>
															</tr>
															<tr>
																<td>
																	<p>10월</p>
																</td>
																<td colspan="2">
																	<p>　</p>
																</td>
																<td>
																	<p>12(목)</p>
																</td>
																<td>
																	<p>서울특별시교육청</p>
																</td>
															</tr>
															<tr>
																<td>
																	<p>11월</p>
																</td>
																<td>
																	<p>21(화)</p>
																</td>
																<td>
																	<p>경기도교육청</p>
																</td>
																<td>
																	<p>16(목)</p>
																</td>
																<td>대학수학능력시험</td>
															</tr>
															<tr>
																<td class="bgGray">횟수</td>
																<td colspan="2" class="bgGray">학년별 4회</td>
																<td colspan="2" class="bgGray">총 7회</td>
															</tr>
														</tbody>
													</table>
												</div>
												<p class="note txtBlue03">※ 대학수학능력시험 모의평가(6, 9월)는 한국교육과정평가원에서 주관하며, 일정이 변동될 수 있음.</p>
											</div>
										</div>

										<div class="tabCont02" id="range_tabCont02" style="display: none">
											<div class="tabArea">
												<ul class="tabTypeB">
													<li class="on"><a href="javascript:;">고1</a></li>
													<li><a href="javascript:;">고2</a></li>
													<li><a href="javascript:;">고3</a></li>
												</ul>
											</div>
											<div class="cont01" style="display: block">
												<div class="tblList line thScroll">
													<table>
														<colgroup>
															<col />
															<col width="11%" />
															<col width="17%" />
															<col width="22%" />
															<col width="23%" />
															<col width="22%" />
														</colgroup>
														<thead>
															<tr>
																<th colspan="2">
																	<p>영역(과목)</p>
																</th>
																<th>3월 23일(목)<br />학력평가</th>
																<th>6월 1일(목)<br />학력평가</th>
																<th>9월 6일(수)<br />학력평가</th>
																<th>11월 21일(화)<br />학력평가</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="2">
																	<p>국어</p>
																</td>
																<td rowspan="6">
																	<p>중학교 교육과정 전 범위</p>
																</td>
																<td>
																	<p>6월 수준에 맞추어 출제<br /><br />- (공통 과목) 국어에서 출제 -</p>
																</td>
																<td>
																	<p>9월 수준에 맞추어 출제<br /><br />- (공통 과목) 국어에서 출제-</p>
																</td>
																<td>
																	<p>11월 수준에 맞추어 출제<br /><br />- (공통 과목) 국어에서 출제 -</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>수학</p>
																</td>
																<td>
																	<p>6월 수준에 맞추어 출제<br /><br />- (공통 과목) 수학 <br />Ⅱ. 방정식과 부등식 -</p>
																</td>
																<td>
																	<p>9월 수준에 맞추어 출제<br /><br />- (공통 과목) 수학 <br />Ⅲ. 도형의 방정식 -</p>
																</td>
																<td>
																	<p>11월 수준에 맞추어 출제<br /><br />- (공통 과목) 수학 <br />Ⅴ. 함수 1. 함수 -</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>영어</p>
																</td>
																<td>
																	<p>6월 수준에 맞추어 출제<br /><br />- (공통 과목) 영어에서 출제 -</p>
																</td>
																<td>
																	<p>9월 수준에 맞추어 출제<br /><br />- (공통 과목) 영어에서 출제-</p>
																</td>
																<td>
																	<p>11월 수준에 맞추어 출제<br /><br />- (공통 과목)영어에서 출제 -</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>한국사</p>
																</td>
																<td>
																	<p>
																		Ⅱ. 근대 국민 국가 수립운동<br />
																		3. 근대 국민 국가 수립을 위한 노력
																	</p>
																</td>
																<td>
																	<p>
																		Ⅲ. 일제 식민지 지배와<br />
																		민족 운동의 전개<br />
																		2. 3·1 운동과 대한민국 임시 정부
																	</p>
																</td>
																<td>
																	<p>Ⅳ. 대한민국의 발전<br />3. 6.25 전쟁과 남북 분단의 고착화</p>
																</td>
															</tr>
															<tr>
																<td rowspan="2">
																	<p>탐구</p>
																</td>
																<td class="first">
																	<p>통합사회</p>
																</td>
																<td>
																	<p>Ⅳ. 인권 보장과 헌법<br />1. 인권의 의미와 변화 양상</p>
																</td>
																<td>
																	<p>Ⅴ. 시장 경제와 금융 <br />2. 시장경제와 경제주체<br />(국제경제 전까지)</p>
																</td>
																<td>
																	<p>Ⅶ. 세계화와 평화</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>통합과학</p>
																</td>
																<td>
																	<p>Ⅱ. 시스템과 상호작용<br />1. 역학적 시스템</p>
																</td>
																<td>
																	<p>Ⅱ. 시스템과 상호작용</p>
																</td>
																<td>
																	<p>Ⅳ. 환경과 에너지<br />1. 생태계와 환경<br />(발전과 신재생 에너지 제외)</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<p class="note">
													* 출제 범위는 교육과정 순서에 의한 최종 단원을 나타내며, 처음부터 누적임. <br />
													* 출제 과목 및 범위는 추후 조정될 수 있음.
												</p>
											</div>
											<div class="cont02" style="display: none">
												<div class="tblList line thScroll">
													<table>
														<colgroup>
															<col />
															<col width="11%" />
															<col width="17%" />
															<col width="22%" />
															<col width="22%" />
															<col width="22%" />
														</colgroup>
														<thead>
															<tr>
																<th colspan="2">
																	<p>영역(과목)</p>
																</th>
																<th>3월 23일(목)<br />학력평가</th>
																<th>6월 1일(목)<br />학력평가</th>
																<th>9월 6일(수)<br />학력평가</th>
																<th>11월 21일(화)<br />학력평가</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="2">
																	<p>국어</p>
																</td>
																<td>
																	<p>1학년 국어 전 범위</p>
																</td>
																<td>
																	<p>6월 수준에 맞추어 출제<br />(독서, 문학, 화법과 작문, 언어와 매체)<br />※'언어와 매체'에서는 언어만 출제</p>
																</td>
																<td>
																	<p>9월 수준에 맞추어 출제<br />(독서, 문학, 화법과 작문, 언어와 매체)<br />※'언어와 매체'에서는 언어만 출제</p>
																</td>
																<td>
																	<p>11월 수준에 맞추어 출제<br />(독서, 문학, 화법과 작문, 언어와 매체)<br />※'언어와 매체'에서는 언어만 출제</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>수학</p>
																</td>
																<td>
																	<p>1학년 수학 전 범위</p>
																</td>
																<td>
																	<p>[수학Ⅰ] Ⅱ. 삼각함수</p>
																</td>
																<td>
																	<p>[수학Ⅰ] 전 범위<br />[수학Ⅱ] Ⅰ. 함수의 극한과 연속 <br />1. 함수의 극한<br />(함수의 극한, 함수의 극한에 대한 성질)</p>
																</td>
																<td>
																	<p>[수학Ⅰ] 전 범위<br />[수학Ⅱ] Ⅱ. 미분-(2)도함수</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>영어</p>
																</td>
																<td>
																	<p>1학년 영어 전 범위</p>
																</td>
																<td>
																	<p>6월 수준에 맞추어 출제<br />(영어Ⅰ)</p>
																</td>
																<td>
																	<p>9월 수준에 맞추어 출제<br />(영어Ⅰ)</p>
																</td>
																<td>
																	<p>11월 수준에 맞추어 출제<br />(영어Ⅰ, 영어Ⅱ )</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>한국사</p>
																</td>
																<td>
																	<p>고1 전 범위<br />(3월 수준에 맞추어 출제)</p>
																</td>
																<td>
																	<p>Ⅱ. 근대 국민 국가 수립 운동 <br />3. 근대 국민 국가 수립을 위한 노력</p>
																</td>
																<td>
																	<p>
																		Ⅲ. 일제 식민지 지배와<br />
																		민족 운동의 전개<br />
																		2.3·1 운동과 대한민국 임시 정부
																	</p>
																</td>
																<td>
																	<p>Ⅳ. 대한민국의 발전<br />3. 6.25 전쟁과 남북 분단의 고착화</p>
																</td>
															</tr>
															<tr>
																<td rowspan="9">
																	<p>사회<br />탐구</p>
																</td>
																<td class="first">
																	<p>생활과 윤리</p>
																</td>
																<td rowspan="9">
																	<p>고1 통합사회 과목별 전 범위<br />(세계사와 동아시아사의 경우 중학교 역사와 고1의 한국사의 관련 내용요소를 포함)</p>
																</td>
																<td>
																	<p>Ⅲ. 사회와 윤리</p>
																</td>
																<td>
																	<p>Ⅳ. 과학과 윤리</p>
																</td>
																<td>
																	<p>Ⅴ. 문화와 윤리</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>윤리와 사상</p>
																</td>
																<td>
																	<p>Ⅱ. 동양과 한국 윤리사상</p>
																</td>
																<td>
																	<p>III. 서양 윤리사상<br />6. 옳고 그름의 기준: 의무와 결과</p>
																</td>
																<td>
																	<p>Ⅳ. 사회 사상</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>한국지리</p>
																</td>
																<td>
																	<p>Ⅲ. 기후 환경과 인간 생활<br />1. 우리나라의 기후 특성</p>
																</td>
																<td>
																	<p>
																		Ⅴ. 생산과 소비의 공간<br />
																		2. 농업의 변화와 농촌 문제
																	</p>
																</td>
																<td>
																	<p>Ⅶ. 우리나라의 지역 이해<br />2. 북한 지역의 특성과 통일 국토의 미래</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p><a href="#range">세계지리</a></p>
																</td>
																<td>
																	<p>Ⅲ. 세계의 인문환경과 인문 경관<br />1.주요 종교의 전파와 종교 경관</p>
																</td>
																<td>
																	<p>Ⅳ. 몬순 아시아와 오세아니아</p>
																</td>
																<td>
																	<p>Ⅶ. 사하라 이남 아프리카와 중ㆍ남부 아메리카</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>동아시아사</p>
																</td>
																<td>
																	<p>Ⅲ. 동아시아의 사회 변동과 문화 교류<br />1. 17세기 전후 동아시아 전쟁</p>
																</td>
																<td>
																	<p>Ⅲ. 동아시아의 사회 변동과 문화 교류</p>
																</td>
																<td>
																	<p>Ⅴ. 오늘날의 동아시아</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>세계사</p>
																</td>
																<td>
																	<p>Ⅲ. 서아시아 인도 지역의 역사<br />1. 서아시아의 여러 제국과 이슬람 세계의 형성</p>
																</td>
																<td>
																	<p>Ⅳ. 유럽 아메리카 지역의 역사</p>
																</td>
																<td>
																	<p>Ⅴ. 제국주의와 두 차례의 세계대전</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>경제</p>
																</td>
																<td>
																	<p>Ⅱ. 시장과 경제 활동</p>
																</td>
																<td>
																	<p>Ⅲ. 국가와 경제활동</p>
																</td>
																<td>
																	<p>Ⅳ. 세계 시장과 교역</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>정치와 법</p>
																</td>
																<td>
																	<p>Ⅲ. 정치과정과 참여</p>
																</td>
																<td>
																	<p>Ⅳ. 개인생활과 법<br />2. 재산 관계와 법</p>
																</td>
																<td>
																	<p>Ⅴ. 사회생활과 법</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>사회·문화</p>
																</td>
																<td>
																	<p>Ⅲ. 문화와 일상생활<br />2. 현대 사회의 문화 양상</p>
																</td>
																<td>
																	<p>Ⅲ. 문화와 일상생활</p>
																</td>
																<td>
																	<p>Ⅳ. 사회계층과 불평등</p>
																</td>
															</tr>
															<tr>
																<td rowspan="4">
																	<p>과학<br />탐구</p>
																</td>
																<td class="first">
																	<p>물리학Ⅰ</p>
																</td>
																<td>
																	<p>[통합과학] 전 범위<br />Ⅰ. 역학과 에너지 <br />1. 힘과 운동 <br />- 운동 법칙 단원</p>
																</td>
																<td>
																	<p>I. 역학과 에너지 <br />1. 힘과 운동 <br />2. 에너지와 열</p>
																</td>
																<td>
																	<p>Ⅱ. 물질과 전자기장<br />1. 전기</p>
																</td>
																<td>
																	<p>Ⅲ. 파동과 정보통신<br />- 파동과 통신 단원까지</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>화학Ⅰ</p>
																</td>
																<td>
																	<p>[통합과학] 전 범위<br />Ⅰ. 화학의 첫걸음 <br />2. 아보가드로수와 몰</p>
																</td>
																<td>
																	<p>Ⅱ. 원자의 세계<br />2. 원자 모형과 전자 배치</p>
																</td>
																<td>
																	<p>Ⅲ. 화학 결합과 분자의 세계<br />1. 화학 결합의 종류</p>
																</td>
																<td>
																	<p>Ⅳ. 역동적인 화학 반응<br />2. 산 염기 중화 반응</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>생명과학Ⅰ</p>
																</td>
																<td>
																	<p>[통합과학] 전 범위 <br />Ⅰ. 생명 과학의 이해</p>
																</td>
																<td>
																	<p>III. 항상성과 건강<br />03.항상성 유지<br /></p>
																</td>
																<td>
																	<p>Ⅳ.유전<br />02.생식세포의 형성과 유전적 다양성<br /></p>
																</td>
																<td>
																	<p>Ⅴ. 생태계와 상호 작용<br />01. 생태계의 구성과 기능<br /></p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>지구과학Ⅰ</p>
																</td>
																<td>
																	<p>[통합과학] 전 범위<br />Ⅰ. 지권의 변동</p>
																</td>
																<td>
																	<p>Ⅲ. 대기와 해양의 변화<br />1.기압과 날씨변화</p>
																</td>
																<td>
																	<p>Ⅳ. 대기와 해양의 상호 작용<br />2. 해양의 심층 순환</p>
																</td>
																<td>
																	<p>Ⅴ. 별과 외계 행성계<br />4. 별의 에너지원과 내부 구조</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<p class="note">
													* 출제 범위는 교육과정 순서에 의한 최종 단원을 나타내며, 처음부터 누적임. <br />
													* 출제 과목 및 범위는 추후 조정될 수 있음.
												</p>
											</div>
											<div class="cont03" style="display: none">
												<div class="tblList line thScroll" style="height: 354px">
													<table cellspacing="0" cellpadding="0">
														<colgroup>
															<col />
															<col width="7.6%" />
															<col width="15%" />
															<col width="16%" />
															<col width="15%" />
															<col width="15%" />
															<col width="8%" />
															<col width="10%" />
															<col width="10%" />
														</colgroup>
														<thead>
															<tr>
																<th colspan="2">
																	<p>영역(과목)</p>
																</th>
																<th>3월 23일(목)<br />학력평가</th>
																<th>5월 10일(수)<br />학력평가</th>
																<th class="txtBlue03">6월 1일(목)<br />모의평가</th>
																<th>7월 11일(화)<br />학력평가</th>
																<th class="txtBlue03">9월 6일(수)<br />모의평가</th>
																<th>
																	10월 12일(목)<br />
																	학력평가
																</th>
																<th>
																	11월 16일(목)<br />
																	대수능<br />
																	(2024학년도)
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td colspan="2">
																	<p>국어</p>
																</td>
																<td>
																	<p>1, 2학년 전 범위<br />(독서, 문학, 화법과 작문, 언어와 매체)</p>
																</td>
																<td colspan="6">
																	<p>전 범위<br />(독서, 문학, 화법과 작문, 언어와 매체)</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>수학</p>
																</td>
																<td>
																	<p>[수학Ⅰ] 전 범위<br />[수학Ⅱ] 전 범위<br />[확률과 통계]Ⅰ. 경우의 수<br />(1. 순열과 조합)<br />[미적분]Ⅰ. 수열의 극한 <br />(1. 수열의 극한)<br />[기하]Ⅰ. 이차곡선<br />(1. 이차곡선(타원,포물선,쌍곡선))</p>
																</td>
																<td>
																	<p>[수학Ⅰ] 전 범위<br />[수학Ⅱ] 전 범위 <br />[확률과 통계]Ⅰ. 경우의 수<br />[미적분] Ⅱ. 미분법<br />(1. 여러 가지 함수의 미분)<br />[기하] Ⅱ. 평면벡터<br />(1. 벡터의 연산)</p>
																</td>
																<td>
																	<p>[수학Ⅰ] 전 범위<br />[수학Ⅱ] 전 범위<br />[확률과 통계] Ⅱ. 확률<br />[미적분] Ⅱ. 미분법<br />[기하] Ⅱ. 평면벡터</p>
																</td>
																<td>
																	<p>[수학Ⅰ] 전 범위<br />[수학Ⅱ] 전 범위<br />[확률과 통계] Ⅲ. 통계 <br />1. 확률분포<br />[미적분] Ⅲ. 적분법<br />(1. 여러 가지 적분법)<br />[기하] Ⅲ. 공간도형과 공간좌표(1. 공간도형)</p>
																</td>
																<td colspan="3">
																	<p>전 범위<br />(수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분, 기하)</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>영어</p>
																</td>
																<td>
																	<p>1,2학년 전 범위</p>
																</td>
																<td colspan="6">
																	<p>전 범위<br />(영어Ⅰ, 영어Ⅱ)</p>
																</td>
															</tr>
															<tr>
																<td colspan="2">
																	<p>한국사</p>
																</td>
																<td colspan="7">
																	<p>전 범위</p>
																</td>
															</tr>
															<tr>
																<td rowspan="9">
																	<p>사회<br />탐구</p>
																</td>
																<td class="first">
																	<p>생활과 윤리</p>
																</td>
																<td colspan="7" rowspan="9">
																	<p>전 범위</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>윤리와 사상</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>한국지리</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>세계지리</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>동아시아사</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>세계사</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>경제</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>정치와 법</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>사회·문화</p>
																</td>
															</tr>
															<tr>
																<td rowspan="8">
																	<p>과학<br />탐구</p>
																</td>
																<td class="first">
																	<p>물리학Ⅰ</p>
																</td>
																<td colspan="7" rowspan="4">
																	<p>전 범위</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>화학Ⅰ</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>생명과학Ⅰ</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>지구과학Ⅰ</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>물리학Ⅱ</p>
																</td>
																<td rowspan="4">
																	<p>미실시</p>
																</td>
																<td>
																	<p>Ⅱ. 전자기장<br />1. 전기장과 전기력선</p>
																</td>
																<td>
																	<p>Ⅱ. 전자기장</p>
																</td>
																<td>
																	<p>Ⅲ. 파동과 물질의 성질<br />1. 전자기파의 성질과 활용</p>
																</td>
																<td colspan="3" rowspan="4">
																	<p>전 범위</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>화학Ⅱ</p>
																</td>
																<td>
																	<p>Ⅱ. 반응엔탈피와 화학 평형<br />1. 반응엔탈피와 헤스 법칙</p>
																</td>
																<td>
																	<p>Ⅲ. 반응 속도와 촉매</p>
																</td>
																<td>
																	<p>Ⅲ. 화학 반응 속도</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>생명과학Ⅱ</p>
																</td>
																<td>
																	<p>Ⅲ. 세포 호흡과 광합성</p>
																</td>
																<td>
																	<p>IV. 유전자 발현의 조절</p>
																</td>
																<td>
																	<p>Ⅴ. 생물의 진화와 다양성<br />02.생물의 분류와 다양성</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>지구과학Ⅱ</p>
																</td>
																<td>
																	<p>Ⅰ. 고체 지구</p>
																</td>
																<td>
																	<p>Ⅱ. 대기와 해양<br />2. 대기의 운동과 순환</p>
																</td>
																<td>
																	<p>Ⅵ. 행성의 운동</p>
																</td>
															</tr>
															<tr>
																<td rowspan="6">
																	<p>직업<br />탐구</p>
																</td>
																<td class="first">
																	<p>성공적인<br />직업 생활</p>
																</td>
																<td colspan="2" rowspan="6">
																	<p>미실시</p>
																</td>
																<td rowspan="6">
																	<p>전 범위</p>
																</td>
																<td rowspan="6">
																	<p>미실시</p>
																</td>
																<td colspan="3" rowspan="6">
																	<p>전 범위</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>농업 기초<br />기술</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>공업 일반</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>상업 경제</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>수산·해운<br />산업 기초</p>
																</td>
															</tr>
															<tr>
																<td class="bl">
																	<p>인간 발달</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<p class="note">
													<span class="txtBlue03"> * 6월, 9월 모의평가는 한국교육과정평가원에서 주관하며, 추후 범위가 달라질 수 있음. </span><br />
													* 출제 범위는 교육과정 순서에 의한 최종단원을 나타내며, 처음부터 누적임. <br />
													* 출제 과목 및 범위는 추후 조정될 수 있음.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a href="javascript:;" class="btnClose" onclick="closeLayer('.popTestSchd')"><span>닫기</span></a>
						</div>
						<div class="dim"></div>
					</div>
					<!-- //Layer popup - 2022년 시험 일정 및 출제 범위 -->
				</div>
			</div>

			<hr />
			<div id="content" class="mentoWrap">
				<!-- 2020.06.17 김하영, 고등 런칭 시, path 위에 띠배너 영역이 추가됨. 마스터의 아이디 가져다 쓰시면 됩니다. -->

				<!-- container -->

				<!-- content -->
				<div id="content">
					<!-- 강좌 메인배너// -->
					<div class="satMainBnr">
						<div class="bx-wrapper" style="max-width: 100%">
							<div class="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 180px">
								<ul class="rollBnr" style="width: auto; position: relative">
									<li style="float: none; list-style: none; position: absolute; width: 840px; z-index: 0; display: none">
										<a href="https://high.milkt.co.kr/EntranceCourse/EntranceInfo/frm_EntranceInfo_List.aspx?MenuCode=220100"><img src="//high.milkt.co.kr/UploadFile/Banner/2dedd44a-0497-46dd-9c11-5ac9114286d520220713110742.jpg" alt="입시분석" /></a>
									</li>
									<li style="float: none; list-style: none; position: absolute; width: 840px; z-index: 0; display: none">
										<a href="https://high.milkt.co.kr/EntranceCourse/CollegeStrategy/frm_FullService.aspx?menucode=220900"
											><img src="//high.milkt.co.kr/UploadFile/Banner/af585634-3773-4a9e-ad7f-28b953fd417020220927101953.jpg" alt="대입전략서비스"
										/></a>
									</li>
									<li style="float: none; list-style: none; position: absolute; width: 840px; z-index: 50">
										<a href="https://high.milkt.co.kr/University/frm_University_MapSearch_List.aspx?MenuCode=220200"><img src="//high.milkt.co.kr/UploadFile/Banner/9e3f7d7e-57e8-4949-96de-9a42ce93828820220713110847.jpg" alt="대학별 모집요강" /></a>
									</li>
									<li style="float: none; list-style: none; position: absolute; width: 840px; z-index: 0; display: none">
										<a href="https://high.milkt.co.kr/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220530&amp;Type=ThisDepartment"
											><img src="//high.milkt.co.kr/UploadFile/Banner/e5e1edc3-a81b-43c2-96a1-59aa2b657c5a20220713110954.jpg" alt="진로진학정보"
										/></a>
									</li>
								</ul>
							</div>
							<div class="bx-controls bx-has-controls-direction bx-has-controls-auto">
								<div class="bx-controls-direction"><a class="bx-prev" href="">Prev</a><a class="bx-next" href="">Next</a></div>
								<div class="bx-controls-auto">
									<div class="bx-controls-auto-item"><a class="bx-start active" href="">Start</a></div>
									<div class="bx-controls-auto-item"><a class="bx-stop" href="">Stop</a></div>
								</div>
							</div>
						</div>
						<div id="roltabArea" class="rolTabNav">
							<a data-slide-index="0" href="//high.milkt.co.kr/EntranceCourse/EntranceInfo/frm_EntranceInfo_List.aspx?MenuCode=220100" class="">입시분석</a>
							<a data-slide-index="1" href="//high.milkt.co.kr/EntranceCourse/CollegeStrategy/frm_FullService.aspx?menucode=220910" class="">대입전략서비스</a>
							<a data-slide-index="2" href="//high.milkt.co.kr/University/frm_University_MapSearch_List.aspx?MenuCode=220200" class="active">대학별 모집요강</a>
							<a data-slide-index="3" href="//high.milkt.co.kr/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220530&amp;Type=ThisDepartment">진로진학정보</a>
						</div>
					</div>
					<!-- //강좌 메인배너 -->

					<!-- topTitArea -->

					<!-- //topTitArea -->

					<div class="infoHighSchool">
						<!-- 입시분석 -->
						<div class="analysis thumbnailList">
							<ul class="rollBnr">
								<li onclick="javascript:mf_EntranceInfo_Detail('400','0')">
									<a href="javascript:;">
										<div class="img">
											<img src="//cdndata.milkt.co.kr/high/www/img_new/drmschool/exam_bg_01.jpg" onclick="javascript:mf_EntranceInfo_Detail('400') " />
											<p class="tit"><span onclick="mf_EntranceInfo_Detail('400')" class="icoBox type04">대입분석</span></p>
											<span class="detail" onclick="javascript:mf_EntranceInfo_Detail('400')  ">2024학년도 대입전형 시행계획 주요 특징</span>
											<span class="thumbTit" style="top: 25%" onclick="javascript:mf_EntranceInfo_Detail('400')  ">2024학년도 대입전형 시행계획 주요 특징</span>
										</div>
									</a>
								</li>

								<li onclick="javascript:mf_EntranceInfo_Detail('399')   ">
									<a href="javascript:;">
										<p class="img">
											<img src="//high.milkt.co.kr/UploadFile/ReferenceData/쉬운입시_사관학교모집_썸네일.jpg" alt="" onclick="mf_EntranceInfo_Detail('399') " />
										</p>
										<p class="tit"><span class="icoBox type07">쉬운입시</span></p>
										<span class="detail" onclick="javascript:mf_EntranceInfo_Detail('399')  ">2024학년도 사관학교 입시 주요 내용</span>
									</a>
								</li>

								<li onclick="javascript:mf_EntranceInfo_Detail('398')  ">
									<a href="javascript:;">
										<div class="news blue">
											<span class="flag blue">대교협</span>
											<div class="newsTit" onclick="javascript:mf_EntranceInfo_Detail('398')  "><span class="year">2025학년도</span><br />대학입학전형시행계획 발표</div>
										</div>
										<p class="tit"><span class="icoBox type01">발표자료</span></p>
										<span class="detail" onclick="javascript:mf_EntranceInfo_Detail('398') ">2025학년도 대학입학전형시행계획 발표</span>
										<span class="i_PDF"></span>
										<span class="i_PDF"></span>
									</a>
								</li>
							</ul>
						</div>
						<!-- 입시분석  -->

						<!-- 2022-12-14 밀크T가 말한다 영역 추가 -->
						<div class="service slidBnrWrap">
							<h2 class="title">밀크T가 말한다</h2>
							<!-- <div class="slideBnrCnt swiper-container" style="width: 840px">
								<ul class="listSlide swiper-wrapper slick-initialized slick-slider" id="mTalkSlideList">
									<div aria-live="polite" class="slick-list draggable">
										<div class="slick-track" style="opacity: 1; width: 3360px; transform: translate3d(-1680px, 0px, 0px)" role="listbox">
											<li class="swiper-slide slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 840px">
												<a href="/MyStudy/UnivSelfTest/frm_UnivSelfTest_Home.aspx?MenuCode=221000" tabindex="-1"> <img src="//cdndata.milkt.co.kr/high/www/img_new/drmschool/bnnr_info230405.jpg" alt="2023년도 3월 대학합격진단서비스." /></a>
											</li>
											<li class="swiper-slide slick-slide" id="mTalkSlide2" data-slick-index="0" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide00" style="width: 840px">
												<a href="/MyStudy/FullService/frm_FullService_Home.aspx?menucode=220900&amp;Grade=12" tabindex="-1">
													<img src="//cdndata.milkt.co.kr/high/www/img_new/drmschool/bnnr_info230510_open.jpg" alt="2023년 5월 고3 풀서비스 오픈."
												/></a>
											</li>
											<li class="swiper-slide slick-slide slick-current slick-active" id="mTalkSlide3" data-slick-index="1" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide01" style="width: 840px">
												<a href="/MyStudy/UnivSelfTest/frm_UnivSelfTest_Home.aspx?MenuCode=221000" tabindex="0"> <img src="//cdndata.milkt.co.kr/high/www/img_new/drmschool/bnnr_info230405.jpg" alt="2023년도 3월 대학합격진단서비스." /></a>
											</li>
											<li class="swiper-slide slick-slide slick-cloned" data-slick-index="2" aria-hidden="true" tabindex="-1" style="width: 840px">
												<a href="/MyStudy/FullService/frm_FullService_Home.aspx?menucode=220900&amp;Grade=12" tabindex="-1">
													<img src="//cdndata.milkt.co.kr/high/www/img_new/drmschool/bnnr_info230510_open.jpg" alt="2023년 5월 고3 풀서비스 오픈."
												/></a>
											</li>
										</div>
									</div>
								</ul>
								<div class="swiper-pagination"></div>
							</div> -->
						</div>
						<!-- 2022-12-14 밀크T가 말한다 영역 추가 -->

						<!-- 밀크T 에듀고 -->
						<div class="service">
							<h2 class="title">
								밀크T 에듀고 <a href="https://high.milkt.co.kr/EntranceCourse/EduGo/frm_EdugoIntro.aspx?menucode=220710"><span class="btnMore"></span></a>
							</h2>
							<div class="serviceCnt">
								<a href="https://high.milkt.co.kr/EntranceCourse/EduGo/frm_EdugoIntro.aspx?menucode=220710" class="serviceBtn"> <span>에듀고 소개</span> 바로 가기 </a>
								<a href="https://high.milkt.co.kr/EntranceCourse/EduGo/frm_EdugoDesign.aspx?menucode=220720" class="serviceBtn"> <span>입시 설계</span> 바로 가기 </a>
								<a href="https://high.milkt.co.kr/EntranceCourse/EduGo/frm_EdugoManagement.aspx?menucode=220730" class="serviceBtn"> <span>학생부 전형</span> 바로 가기 </a>
							</div>
						</div>
						<!-- //밀크T 에듀고 -->

						<!-- 대학별 모집요강 -->
						<div class="universityInfo college">
							<h2 class="title">
								대학별 모집요강 <a href="https://high.milkt.co.kr/University/frm_University_MapSearch_List.aspx?MenuCode=220200"><span class="btnMore"></span></a>
							</h2>
							<div class="infoCnt">
								<p>
									<strong>학교별 입학 모집 요강</strong>을
									<br />
									꼼꼼히 살펴 보세요!
								</p>
								<a href="https://high.milkt.co.kr/University/frm_University_MapSearch_List.aspx?MenuCode=220200" class="infoBtn">
									<span> <img src="//cdndata.milkt.co.kr/high/www/Img_new/drmschool/ico_btn_01.png" alt="" /></span>지도로 찾기
								</a>
								<a href="https://high.milkt.co.kr/University/frm_University_WordSearch_List.aspx?MenuCode=220200" class="infoBtn">
									<span> <img src="//cdndata.milkt.co.kr/high/www/Img_new/drmschool/ico_btn_02.png" alt="" /></span>학교명 검색
								</a>
							</div>
						</div>
						<!-- //대학별 모집요강 -->
						<!-- 진로진학정보 -->
						<div class="universityInfo job">
							<h2 class="title">
								진로진학정보 <a href="https://high.milkt.co.kr/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220530&amp;Type=ThisDepartment"><span class="btnMore"></span></a>
							</h2>
							<div class="infoCnt">
								<p>
									<strong>관심 있는 학과와 직업</strong>에 대한
									<br />
									다양한 정보를 확인해 보세요!
								</p>
								<a href="https://high.milkt.co.kr/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220530&amp;Type=ThisDepartment" class="infoBtn">
									<span> <img src="//cdndata.milkt.co.kr/high/www/Img_new/drmschool/ico_btn_03.png" alt="" /></span>학과 정보
								</a>
								<a href="https://high.milkt.co.kr/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220540&amp;Type=Job" class="infoBtn">
									<span> <img src="//cdndata.milkt.co.kr/high/www/Img_new/drmschool/ico_btn_04.png" alt="" /></span>직업 정보
								</a>
							</div>
						</div>
						<!-- 진로진학정보 -->
					</div>
				</div>
				<!-- //content -->

				<!-- //wrap -->
			</div>
		</div>

		<div class="wrapQuick addChatbot" id="divQuickMenu">
			<div class="chatWrap">
				<a href="javascript:;" class="btnClose" alt="닫기" onclick="chat_close();" id="close_btn"><img src="//cdndata.milkt.co.kr/high/www/img_new/chatbot/btn_close_20220608.png" alt="" /></a>
				<div class="chatbot" id="chatbot">
					<a href="javascript:;" class="container" onclick="Chat_Click();">
						<div class="txtBot">밀크T<br />챗봇 Beta</div>
						<div class="objBox">
							<span class="obj01" style="visibility: hidden"></span>
							<span class="obj02" style="visibility: visible"></span>
							<span class="obj03" style="visibility: hidden"></span>
						</div>
					</a>
				</div>
			</div>
			<ul class="quickLlist">
				<li class="qAilecture"><a href="/Lesson/BridgeNew/20210217_ai_lecture/bridge_210217.aspx">AI 등급별 강좌 추천</a></li>

				<li class="qSample"><a href="/lesson/sample/frm_lesson_sample_list.aspx?MenuCode=020920">전체 강좌 맛보기</a></li>
				<li class="qGuide"><a href="javascript:;" onclick="gf_Popup_Open('/popup/lesson/Coursemap/pop_CourseIntro.aspx', 'Popupintro', '1120px', '600px', 'no', '10', '10', 'Popupintro');">강좌 한눈에 보기</a></li>
				<li>
					<a href="https://high.milkt.co.kr/MyStudy/FullService/frm_FullService_Home.aspx?Grade=12&amp;menucode=220900" target="_parent"
						><img src="//high.milkt.co.kr/UploadFile/Banner/4d591615-5894-47bd-b315-b85b342f43df20230510105737.jpg" alt="5월 풀서비스"
					/></a>
				</li>
				<li>
					<a href="https://high.milkt.co.kr/EventNew/20221005_training/20221005_training.aspx" target="_parent"><img src="//high.milkt.co.kr/UploadFile/Banner/b44ed41e-f0c5-44c9-b8c3-c3cc5fce3e5920230504080951.jpg" alt="빈출 유형 트레이닝" /></a>
				</li>
				<li>
					<a href="http://high.milkt.co.kr/EventNew/20230427_fullService/fullService_event.aspx" target="_parent"><img src="//high.milkt.co.kr/UploadFile/Banner/86219276-ad88-4e62-8cf3-38c3f871b29b20230511011552.jpg" alt="6평 사전PG" /></a>
				</li>
				<li>
					<a href="https://high.milkt.co.kr/Lesson/BridgeNew/20230322_midterm/bridge_230322.aspx#tabCntWrap" target="_blank"
						><img src="//high.milkt.co.kr/UploadFile/Banner/3f832e76-d587-4265-af29-2a13742875a420230330015645.jpg" alt="1학기 중간고사 시험 대비 특강"
					/></a>
				</li>
				<li>
					<a href="https://high.milkt.co.kr/EventNew/20230412_lecture/event.aspx" target="_blank"><img src="//high.milkt.co.kr/UploadFile/Banner/95daaf08-da3f-4a06-9119-095181a3b78320230425011322.jpg" alt="수능 D-200 대비" /></a>
				</li>
				<li>
					<a href="https://high.milkt.co.kr/EventNew/20221115_training/20221115_training.aspx" target="_parent"><img src="//high.milkt.co.kr/UploadFile/Banner/2bbda75f-0ceb-41ce-80c0-f4b74a72ab7020230131091817.jpg" alt="예상문제ZIP" /></a>
				</li>
				<li>
					<a href="https://high.milkt.co.kr/Lesson/BridgeNew/20230215_hb/bridge_230215.aspx" target="_blank"><img src="//high.milkt.co.kr/UploadFile/Banner/11883eef-011a-499b-bd23-0908bbb410e320230222015918.jpg" alt="해법문학관" /></a>
				</li>
			</ul>
			<div class="txt" style="display: none"><input type="checkbox" id="chk_SCroll" /><label for="chk_SCroll">스크롤 정지</label></div>
		</div>
	</div>
</template>

<script>
import CommonUI from '../utils/CommonUI'
export default {
	head() {
		return {
			link: [
				{
					rel: 'stylesheet',
					href: `//high.milkt.co.kr/Css/New/entra_info.css`,
				},
				{
					rel: 'stylesheet',
					href: `//high.milkt.co.kr/css/renew/jquery.listtopie.css`,
				},
				{
					rel: 'stylesheet',
					href: `//high.milkt.co.kr/EventNew/20220412_aiStudyRoom/event.css`,
				},
			],
			script: [
				{
					src: `//high.milkt.co.kr/EventNew/20220412_aiStudyRoom/event.js`,
				},
			],
		}
	},
	mounted() {
		CommonUI.loadScript(`//high.milkt.co.kr/EventNew/20220412_aiStudyRoom/event.js`)
	},
}
</script>
