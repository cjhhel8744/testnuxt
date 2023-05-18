<!-- Please remove this file from your project -->
<template>
	<div id="header" class="header">
		<!-- headerCon -->
		<div class="headerCon">
			<!-- new header -->
			<div class="linkMenu">
				<div class="left">
					<span class="sns">
						<a href="https://www.instagram.com/milkt_official/" class="sns02" target="_blank" title="인스타그램 바로가기"></a>
						<a href="https://post.naver.com/iammilkt" class="sns03" target="_blank" title="포스트 바로가기"></a>
						<a href="https://blog.naver.com/iammilkt" class="sns04" target="_blank" title="블로그 바로가기"></a>
						<a href="https://tv.naver.com/milkt" class="sns05" target="_blank" title="네이버TV 바로가기"></a>
						<a href="https://www.youtube.com/channel/UCYz1VDueH9mZ26IGDg5O5gA" class="sns06" target="_blank" title="유튜브 바로가기"></a>
					</span>
					<span class="siteMilkT">
						<a href="#" class="txtSelected">
							<span class="txt">밀크T중학</span>
						</a>
						<div class="wrapListMilkt">
							<ul class="listMilkT">
								<li>
									<a href="http://mid.milkt.co.kr/" target="_blank">밀크T중학</a>
								</li>
								<li>
									<a href="http://www.milkt.co.kr/Main/Main_v4" target="_blank">밀크T초등</a>
								</li>
								<li>
									<a href="http://i.milkt.co.kr" target="_blank">밀크T아이</a>
								</li>
							</ul>
							<a href="#" class="btnClose">
								<span class="hide_txt">닫기</span>
							</a>
						</div>
					</span>
					<span class="milkNav">
						<a href="https://high.tsherpa.co.kr/" target="_blank">T셀파</a>
						<a href="http://high.milkt.co.kr/Genia/genia_introd.aspx">AI Genia. 소개</a>

						<a href="https://mall.chunjae.co.kr/#/main/main" target="_blank">천재교육 쇼핑몰</a>
					</span>
				</div>

				<!-- 로그아웃 했을떄 -->
				<div id="ucl_Top_Menu1_div_LoginPrev" class="right">
					<!--// *** 2022-05-02 수능일 정보 추가 ***-->
					<div class="dayInfo">
						<span class="txt">2024학년도 수능</span>
						<span class="dday">
							<em>D-184</em>
						</span>
					</div>
					<!--// *** 2022-05-02 수능일 정보 추가 ***-->

					<a href="javascript:;" onclick="openLayer('.loginPop'); return false;" ;="" class="login">로그인</a>
					<a href="/Member/frm_joinyon.aspx?MenuCode=100100">밀크T가입</a>
					<a href="/Member/frm_idpw_find.aspx?MenuCode=100200">아이디/비밀번호 찾기</a>
					<a href="/Event/frm_EventList.aspx?menucode=090100">이벤트</a>
					<a href="/Support/frm_support.aspx?MenuCode=070000">고객센터</a>
				</div>
				<!-- 로그아웃 했을떄 -->

				<!-- 로그인 했을떄 -->
				<div id="ucl_Top_Menu1_div_LoginSucc" class="right" style="display: none">
					<!--// *** 2022-05-02 수능일 정보 추가 ***-->
					<div class="dayInfo">
						<span class="txt">2024학년도 수능</span>
						<span class="dday">
							<em>D-184</em>
						</span>
					</div>
					<!--// *** 2022-05-02 수능일 정보 추가 ***-->

					<a href="javascript:;" onclick="mf_MoveToProfilePopup('');"> <span></span>님</a>

					<a href="/Member/frm_membership_password_check.aspx">정보수정</a>
					<a href="javascript:void();">새쪽지 <span class="nNum"> </span></a>
					<a href="/SalesNew/frm_sales_1.aspx?MenuCode=080100">장바구니 <span class="bNum"> </span></a>
					<a href="/Member/frm_logout_process.aspx">로그아웃</a>
					<a href="/Event/frm_EventList.aspx?menucode=090100">이벤트</a>
					<a href="/Support/frm_support.aspx?MenuCode=070000">고객센터</a>
					<a href="/Member/frm_membership_modify1_New.aspx?MenuCode=100300" style="display: none">정보수정</a>
				</div>
				<!-- 로그인 했을떄 -->
			</div>
			<!-- new header -->
		</div>
		<!-- //headerCon -->

		<!-- gnb -->
		<div id="gnb">
			<div class="gnbWrapNewAll">
				<div class="gnbWrapNew">
					<h1>
						<nuxt-link to="/">
							<span class="hide_txt">밀크티 고등</span
							><!-- 2022-05-02  수정 -->
						</nuxt-link>
					</h1>

					<!-- gnbMenu -->
					<ul class="gnbMenu">
						<li><nuxt-link id="gm_a_20" to="/course">ALL PASS</nuxt-link></li>
						<li><nuxt-link id="gm_a_02" to="/lesson">강좌안내</nuxt-link></li>
						<li><nuxt-link id="gm_a_03" to="/teacher">선생님</nuxt-link></li>

						<li><nuxt-link id="gm_a_23" to="/event">AI 학습관</nuxt-link></li>
						<li><nuxt-link id="gm_a_TZ" to="/testzone">TEST ZONE</nuxt-link></li>
						<li><nuxt-link id="gm_a_On" to="/onepick">원픽짤강</nuxt-link></li>

						<li><nuxt-link id="gm_a_22" to="/entrance">입시정보</nuxt-link></li>
						<li><nuxt-link id="gm_a_01" to="/mystudy">나의 학습방</nuxt-link></li>
						<!--class="myStudy"-->
					</ul>
					<!-- gnbMenu -->

					<!-- gnbSch -->
					<div class="gnbSch">
						<a href="#" class="btnSch">
							<span>검색</span>
						</a>
						<!-- <a href="#" class="btnSch btnSchClose">
                            <span>검색 닫기</span>
                        </a> -->

						<a href="#" class="allMenu">
							<span>전체메뉴 펼치기</span>
						</a>
						<!-- <a href="#" class="allMenu allmenuClose">
                            <span>전체메뉴 닫기</span>
                        </a> -->
					</div>
					<!-- //gnbSch -->
				</div>
			</div>

			<!-- allSchView : class="btnSch" 검색버튼 선택시 on 클래스 추가 -->
			<div class="allSchView" style="height: 0px">
				<div class="searchInbox">
					<input name="ctl00$ucl_Top_Menu1$txtCommonKewordText" type="text" id="ucl_Top_Menu1_txtCommonKewordText" placeholder="검색어를 입력해 주세요." class="input" onkeypress="return mf_SearchEnter();return false;" />
					<a href="javascript:void(0);" onclick="SearchCommon(); return false;" class="btnSchTotal">전체검색</a>
				</div>
			</div>
			<!-- //allSchView -->

			<!-- allMenuWrap : class="allMenu" 전체메뉴 선택시 on 클래스 추가 -->
			<div class="allMenuWrap" style="height: 0px">
				<div class="allMenuHeader">
					<div class="title">
						<h2>밀크T고등 전체 서비스</h2>

						<a href="javascript:;" class="allMenuPopClose" title="전체메뉴 닫기"></a>
						<!-- allMenu-->
					</div>
				</div>
				<!-- allMenuArea -->
				<ul class="allMenuArea">
					<li class="snb01">
						<a href="/Course/frm_Course_Main.aspx">ALL PASS</a>
						<ul class="subMenu">
							<li><a href="/Course/frm_Course_Main.aspx">ALL PASS</a></li>
							<li><a href="/Course/ScholarShip/frm_Course_Scholarship_Main.aspx">장학제도</a></li>
						</ul>
						<!-- 2022-01-17 추가(이미지형태로 관리) -->
						<ul class="listBnnr">
							<li>
								<a href="/EventNew/20230224_aimathup/event_2.aspx" class="linkBnnr">
									<img src="//cdndata.milkt.co.kr/high/www/Img_new/bnnr/bnnr_menu_aimathup.jpg" alt="수능 AI MATH UP" />
								</a>
							</li>
							<li>
								<a href="/Lesson/BridgeNew/20210709_dc/frm_Bridge_20210709.aspx?Type=Math" class="linkBnnr">
									<img src="//cdndata.milkt.co.kr/high/www/Img_new/bnnr/bnnr_menu_daechi.jpg" alt="대치 퍼스트" />
								</a>
							</li>

							<li>
								<a href="/EventNew/20220412_aiStudyRoom/event.aspx" class="linkBnnr">
									<img src="//cdndata.milkt.co.kr/high/www/Img_new/bnnr/bnnr_menu_aiservice.jpg" alt="AI 학습관" />
								</a>
							</li>
							<li>
								<a href="/Lesson/BridgeNew/20210217_ai_lecture/bridge_210217.aspx" class="linkBnnr">
									<img src="//cdndata.milkt.co.kr/high/www/Img_new/bnnr/bnnr_menu_ailevel.jpg" alt="AI 등급별 강좌 추천" />
								</a>
							</li>
						</ul>
					</li>
					<li class="snb02">
						<a href="/Lesson/frm_lesson_main.aspx?MenuCode=020000">강좌안내</a>
						<ul class="subMenu">
							<li><a href="/Lesson/frm_lesson_high.aspx?MenuCode=020200&amp;CCode=T02">내신진도</a></li>
							<li><a href="/Lesson/frm_lesson_high.aspx?MenuCode=020300&amp;CCode=T03">학교시험대비</a></li>
							<li><a href="/Lesson/frm_lesson_high.aspx?menucode=021300&amp;CCode=T12">수능대비</a></li>
							<li><a href="/Lesson/frm_lesson_high.aspx?MenuCode=020500&amp;CCode=T05">원픽짤강</a></li>
							<li><a href="/Lesson/BridgeNew/20200905_levelMath/bridge_20200905_new.aspx?menucode=021000">수학중점</a></li>
							<li><a href="/Lesson/frm_lesson_T09_main.aspx?menucode=021100">영어중점</a></li>
							<li><a href="/Lesson/BridgeNew/20230215_hb/bridge_230215.aspx?MenuCode=021200&amp;sCode=0">해법문학관</a></li>
							<li><a href="/Lesson/frm_lesson_high.aspx?MenuCode=020400&amp;CCode=T04">국사과특강</a></li>
							<li><a href="/Lesson/frm_lesson_high.aspx?MenuCode=020800&amp;CCode=T08">인증시험</a></li>
						</ul>
					</li>
					<li class="snb03">
						<a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000">선생님</a>
						<ul class="subMenu">
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=1">국어</a></li>
							<!-- Menuon : 메뉴 활성화 idx -->
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=2">수학</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=3">영어</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=4">한국사</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=5">사회탐구</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=6">과학탐구</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=7">제2외국어/한문</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=8">교양</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=9">기술 · 가정</a></li>
							<li><a href="/Teacher/frm_teacher_main.aspx?MenuCode=030000&amp;MenuOn=10">전문교과</a></li>
						</ul>
					</li>
					<li class="snb04">
						<a href="/EntranceCourse/EntranceInfo/frm_EntranceInfo_List.aspx?MenuCode=220100">입시/진로</a>
						<ul class="subMenu">
							<li><a href="/EntranceCourse/EntranceInfo/frm_EntranceInfo_List.aspx?MenuCode=220100">입시정보</a></li>
							<li><a href="/University/frm_University_MapSearch_List.aspx?MenuCode=220200">대학별 모집요강</a></li>
							<li><a href="/EntranceCourse/EduGo/frm_EdugoIntro.aspx?menucode=220710">밀크T 에듀고</a></li>
							<li><a href="/Mystudy/Jindan_New/frm_SelfStudy.aspx?MenuCode=010203">진단검사</a></li>
							<li><a href="/Entrance/WayInfo/frm_TED_List.aspx?MenuCode=220410">독서활동</a></li>
							<li><a href="/Dalja/Magazine/frm_MagazineBoard.aspx?menucode=220500&amp;Type=ThisDepartment">진로진학정보</a></li>
							<li><a href="/DalJa/Mento/frm_Mento_Main.aspx?MenuCode=220600">SKY 멘토 비법</a></li>
							<li><a href="/DreamSchool/frm_course_high_info_sub_examlive.aspx?MenuCode=220800">Live 입시상담</a></li>
						</ul>
					</li>
					<li class="snb05">
						<a href="/Mystudy/frm_mystudy_main.aspx?MenuCode=010000">나의학습방</a>
						<ul class="subMenu">
							<li><a href="/Mystudy/MyLecture/frm_mystudy_lecture.aspx?MenuCode=010101">나의 강의실</a></li>
							<li><a href="/Mystudy/MDiary/frm_MDiary_Day.aspx?MenuCode=011101">M 다이어리</a></li>
							<li><a href="/MilktMission/Mission/frm_Mission_List.aspx?MenuCode=014001">열공미션</a></li>
							<li><a href="/Mystudy/CheckCenter/frm_CheckCenter.aspx?MenuCode=010701">TEST ZONE</a></li>
							<li><a href="/Mystudy/ThreeMock/frm_ThreeMock_L_list.aspx?MenuCode=013001&amp;strMemberType=03&amp;strGrade=1&amp;ddl_Year=2022&amp;ddl_Semester=1&amp;ddl_Exam=F">내신 4종 모의고사</a></li>
							<li><a href="/Mystudy/ExamService/20150325/frm_Event_Note.aspx?MenuCode=012003">시험서비스</a></li>
							<li><a href="/Mystudy/Jindan_New/frm_SelfStudy.aspx?MenuCode=010203">진단검사</a></li>
							<li><a href="/Mystudy/MyQna/frm_mystudy_myqna.aspx?MenuCode=010801">게시판/쪽지</a></li>
							<li><a href="/Mystudy/MyPayment/frm_mystudy_mypayment_RN.aspx?MenuCode=010901">결제정보</a></li>
							<li><a href="/PointShop/frm_PointShop_My_Point.aspx?MenuCode=011002">포인트</a></li>
						</ul>
					</li>
				</ul>
				<!-- //allMenuArea -->

				<div class="allMenuFooter">
					<div class="info">
						<ul>
							<li><a href="/Lesson/Pds/frm_Pds_List.aspx?MenuCode=020930">학습자료</a></li>
							<li><a href="/Support/frm_support.aspx?MenuCode=070000">고객센터</a></li>
							<li><a href="/Event/frm_EventList.aspx?menucode=090100">이벤트</a></li>
							<li><a href="/dalja/webtooncreator/frm_WebtoonCreatorRecom_List.aspx?menucode=110600">쉬는시간</a></li>
						</ul>

						<span class="sns">
							<a href="https://www.instagram.com/milkt_official/" class="sns02" target="_blank" title="인스타그램 바로가기"></a>
							<a href="https://post.naver.com/iammilkt" class="sns03" target="_blank" title="포스트 바로가기"></a>
							<a href="https://blog.naver.com/iammilkt" class="sns04" target="_blank" title="블로그 바로가기"></a>
							<a href="https://tv.naver.com/milkt" class="sns05" target="_blank" title="네이버TV 바로가기"></a>
							<a href="https://www.youtube.com/channel/UCYz1VDueH9mZ26IGDg5O5gA" class="sns06" target="_blank" title="유튜브 바로가기"></a>
						</span>
					</div>
				</div>
			</div>
			<!-- //allMenuWrap -->
		</div>
		<!-- //gnb -->

		<!-- ### popup 로그인 -->
		<div class="popupWrap loginPop" style="display: none">
			<!--style="display:block"-->
			<div class="dim"></div>
			<!-- bg -->
			<div class="layerPop">
				<div class="header">
					<h2>로그인</h2>
				</div>
				<!-- bodyCont -->
				<div class="bodyCont">
					<div class="loginWrap">
						<ul>
							<li>
								<input name="ctl00$ucl_Top_Menu1$txt_TopUserID" type="text" id="ucl_Top_Menu1_txt_TopUserID" class="intxt" placeholder="아이디" onkeypress="return mf_Enter('2');" onfocus="mf_LogFocus(this, 1, 1);" onblur="mf_LogFocus(this, 1, 2);" />
							</li>
							<li>
								<input name="ctl00$ucl_Top_Menu1$txt_TopPassWord" type="password" id="ucl_Top_Menu1_txt_TopPassWord" class="intxt" placeholder="비밀번호" onkeypress="return mf_Enter('2');" onfocus="mf_LogFocus(this, 2, 1);" />
							</li>
							<li>
								<input name="ctl00$ucl_Top_Menu1$pas_TopPassWord" type="password" id="ucl_Top_Menu1_pas_TopPassWord" class="intxt" placeholder="비밀번호" onkeypress="return mf_Enter('2');" yonblur="mf_LogFocus(this, 2, 2);" style="display: none" />
							</li>
						</ul>

						<div class="checkboxWrap">
							<span class="checkStyle"><input type="checkbox" id="chk_TopIDSave" name="ck0101" class="inputCheckbox" /></span>
							<label for="chk_TopIDSave">아이디 저장</label>
						</div>
					</div>

					<div class="btnArea">
						<input
							type="submit"
							name="ctl00$ucl_Top_Menu1$btn_TopLogin"
							value="로그인"
							onclick="return mf_TopProcess.prototype.LoginTopCheck();"
							id="ucl_Top_Menu1_btn_TopLogin"
							class="btns bigOrg"
							alt="로그인"
							style="color: White; border-style: None; font-size: 16pt; font-weight: bold; cursor: pointer"
						/>
						<span style="display: none">
							<input
								type="submit"
								name="ctl00$ucl_Top_Menu1$btn_TopLogin_HD"
								value="로그인"
								id="ucl_Top_Menu1_btn_TopLogin_HD"
								class="btns bigOrg"
								alt="로그인"
								style="color: White; border-style: None; font-size: 16pt; font-weight: bold; cursor: pointer"
						/></span>
					</div>

					<div class="idpwSer">
						<ul>
							<li><a href="/Member/frm_idpw_find.aspx?strTabType=0">아이디 찾기</a></li>
							<li><a href="/Member/frm_idpw_find.aspx?strTabType=1">비밀번호 찾기</a></li>
							<li><a href="/Member/frm_joinyon.aspx?MenuCode=100100">밀크T 가입</a></li>
						</ul>
					</div>
				</div>
				<a href="javascript:;" class="btnClose" onclick="closeLayer('.loginPop')"><span>닫기</span></a>
				<!-- //bodyCont -->
			</div>
		</div>
		<!-- // ### popup 로그인 -->
	</div>
</template>

<script>
export default {}
</script>
